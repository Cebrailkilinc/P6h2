/**
 * IMPORTANT:
 * This file will be imported into Tailwind config.
 * Namespaces and absolute paths are not supported in Tailwind config.
 * Don't change the import/export strategy of the bottom lines.
 */
import { ThemeConfig } from 'tailwindcss/types/config'
import { DefaultScheme } from '../provider'

export const buildScheme = (theme: DefaultScheme) => {
  return theme
}

export const buildDefaultScheme = <T extends Partial<ThemeConfig>>(theme: T) => {
  return theme
}
