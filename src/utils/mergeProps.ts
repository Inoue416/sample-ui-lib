type Props = Record<string, unknown>

export function mergeProps<TProps extends Props[]>(
  ...propsList: TProps
): Props {
  return propsList.reduce<Props>((merged, props) => {
    for (const key of Object.keys(props)) {
      const previous = merged[key]
      const next = props[key]

      if (
        key === 'className' &&
        typeof previous === 'string' &&
        typeof next === 'string'
      ) {
        merged[key] = `${previous} ${next}`
      } else if (key === 'style' && isRecord(previous) && isRecord(next)) {
        merged[key] = { ...previous, ...next }
      } else if (
        key.startsWith('on') &&
        typeof previous === 'function' &&
        typeof next === 'function'
      ) {
        merged[key] = (...args: unknown[]) => {
          previous(...args)
          next(...args)
        }
      } else {
        merged[key] = next
      }
    }

    return merged
  }, {})
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}
