import { PropsWithChildren } from 'react'
import * as schemeCollection from '@/packages/theme/scheme'

export type SchemeVariant = keyof typeof schemeCollection

export type DefaultScheme = typeof schemeCollection.default

export type ThemeContextProps = PropsWithChildren & {
  initialScheme?: SchemeVariant
}
