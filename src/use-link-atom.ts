import {useAtom, useSetAtom}               from 'jotai/react'
import type {SetStateAction, WritableAtom} from 'jotai/vanilla'


export interface HasCTarget<T> {
  currentTarget: {
    value: T
  }
}

export type AtomLinker<S> = (ev: HasCTarget<S>) => void

export function useLinkSetAtom<Value, Result>(
  atom: WritableAtom<Value, [SetStateAction<Value>], Result>,
  options?: Parameters<typeof useSetAtom>[1],
): AtomLinker<Value> {
  const setAtom = useSetAtom(atom, options)

  return (ev: HasCTarget<Value>) => {
    setAtom(ev.currentTarget.value)
  }
}

export function useLinkAtom<Value, Result>(
  atom: WritableAtom<Value, [SetStateAction<Value>], Result>,
  options?: Parameters<typeof useAtom>[1],
): [
  Value,
  ReturnType<typeof useSetAtom<Value, [Value], Result>>,
  AtomLinker<Value>,
] {
  const [value, setAtom] = useAtom(atom, options)
  const linkAtom = useLinkSetAtom(atom, options)
  return [value, setAtom, linkAtom]
}
