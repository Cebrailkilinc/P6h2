/**
 * IMPORTANT:
 * This file will be imported into Tailwind config.
 * Namespaces and absolute paths are not supported in Tailwind config.
 * Don't change the import/export strategy of the bottom lines.
 */
import { paramCase } from 'change-case-all'

export const buildExtend = <T extends object>(theme: T, namespace = '') => {
  const computed = {} as Record<string, any>

  for (const key in theme) {
    const value = theme[key as keyof T]

    if (namespace === 'cursor') {
      computed[key] = value
      continue
    }

    const computedNamespace = paramCase(namespace ? `${namespace}-${key}` : key)

    if (typeof value === 'object') {
      const alias = computedNamespace
        .replace('backgroundColor', 'background')
        .replace('borderColor', 'border')
        .replace('textColor', 'text')

      computed[key] = buildExtend(value as T, alias)
    } else {
      computed[key] = `var(--${computedNamespace})`
    }
  }

  return computed
}
