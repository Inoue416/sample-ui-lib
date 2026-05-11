import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, 'dist')
const cssDeclaration = 'export {}\n'

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)))
      continue
    }

    if (entry.isFile()) {
      files.push(entryPath)
    }
  }

  return files
}

const cssDeclarationPaths = new Set([path.join(distDir, 'style.css.d.ts')])
const declarationFiles = (await walk(distDir)).filter(
  (filePath) => filePath.endsWith('.d.ts') && !filePath.endsWith('.css.d.ts'),
)
const cssImportPattern = /import\s+['"](.+?\.css)['"];?/g

for (const declarationFile of declarationFiles) {
  const declarationSource = await readFile(declarationFile, 'utf8')

  for (const match of declarationSource.matchAll(cssImportPattern)) {
    const cssImportPath = match[1]

    if (!cssImportPath.startsWith('.')) {
      continue
    }

    cssDeclarationPaths.add(
      path.resolve(path.dirname(declarationFile), `${cssImportPath}.d.ts`),
    )
  }
}

for (const declarationPath of cssDeclarationPaths) {
  await mkdir(path.dirname(declarationPath), { recursive: true })
  await writeFile(declarationPath, cssDeclaration)
}

console.log(`Generated ${cssDeclarationPaths.size} CSS declaration files.`)
