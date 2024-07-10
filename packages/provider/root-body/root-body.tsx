'use client'
import { FC } from 'react'
import { localInter } from '@/packages/constant/font-collection'
import { useClassnames } from '@/packages/hook/use-classnames'
import { RootBodyProps } from './root-body.type'

const AppBody: FC<RootBodyProps> = (props) => {
  const { children } = props

  const cx = useClassnames({
    root: [localInter.variable, 'h-screen bg-white'],
  })

  return (
    <body suppressHydrationWarning={true} lang="en" className={cx.root}>
      {children}
    </body>
  )
}

export default AppBody
