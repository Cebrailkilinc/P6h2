import { useMemo } from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { twMerge } from 'tailwind-merge'
import { MergeRecords } from '../type/common'

type ClassnameContainer<K extends string> = Partial<Record<K, ClassNameValue>>

export type ClassnamesProp<K extends string> = {
  classNames?: ClassnameContainer<K>
}

export const useClassnames = <
  I extends { [key in keyof MergeRecords<D>]: ClassNameValue },
  D extends (Partial<Record<string, ClassNameValue>> | undefined)[],
>(
  initial: I,
  dependencies?: [...D]
) => {
  return useMemo(() => {
    const computedClassnames = {}

    for (const key in initial) {
      const currentClass = []
      currentClass.push(initial[key])

      for (const dependency of dependencies ?? []) {
        if (!dependency) continue
        currentClass.push((dependency as any)[key])
      }

      ; (computedClassnames as any)[key] = twMerge(currentClass)
    }

    return computedClassnames
  }, [initial, dependencies]) as {
      [key in keyof Required<MergeRecords<D> & I>]: string
    }
}
