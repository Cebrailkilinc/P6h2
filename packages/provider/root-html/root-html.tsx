'use client'
import React, { CSSProperties, FC, useEffect, useState } from 'react'
import type { RootHtmlProps } from '@/packages/provider/root-html/root-html.type'
import { useThemeProvider } from '@/packages/provider/root-theme'
import { $theme } from '@/packages/util'

const RootHtml: FC<RootHtmlProps> = (props) => {
  const { children } = props

  const theme = useThemeProvider()

  const [hydrationCss, setHydrationCss] = useState<CSSProperties | undefined>(
    $theme.buildVariables(theme.scheme)
  )

  /**
   * After the hydration,
   * Flushes HTML element's style tag.
   */
  useEffect(() => {
    setHydrationCss(undefined)
  }, [])

  return (
    <html style={hydrationCss}>
      <style global={true} jsx={true}>
        {`
          ${$theme.buildCssRootVariables(theme.scheme)}
        `}
      </style>

      {children}
    </html>
  )
}

export default RootHtml
