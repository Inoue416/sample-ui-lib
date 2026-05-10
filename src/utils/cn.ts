export function cn(
  ...values: Array<string | false | null | undefined>
): string | undefined {
  const className = values.filter(Boolean).join(' ')

  return className || undefined
}
