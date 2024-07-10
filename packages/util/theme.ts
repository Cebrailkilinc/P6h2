import { paramCase } from 'change-case-all'
import { DefaultScheme } from '../provider/root-theme/root-theme.type'

export namespace $theme {
  export const buildVariables = (theme: DefaultScheme) => {
    const variables = {} as Record<string, any>

    const flattenVariables = (namespace: any, parent = '') => {
      for (const key in namespace) {
        const computedKey = paramCase(parent ? `${parent}-${key}` : key)

        const alias = computedKey
          .replace('backgroundColor', 'background')
          .replace('borderColor', 'border')
          .replace('textColor', 'text')

        if (typeof namespace[key] === 'object') {
          flattenVariables(namespace[key], computedKey)
        } else {
          variables[`--${alias}`] = namespace[key]
        }
      }
    }

    flattenVariables(theme)

    return variables
  }

  export const buildCssRootVariables = (theme: DefaultScheme) => {
    const variables = Object.entries(buildVariables(theme))
      .map(([key, value]) => `${key}: ${value}`)
      .join(';')

    return `:root { ${variables} }`
  }
}
