import {expect, jest, test} from '@jest/globals'
import {act, renderHook} from '@testing-library/react'
import {atom} from 'jotai/vanilla'
import {useLinkAtom} from '~/use-link-atom.js'


jest.resetModules()

test('useLinkAtom', () => {
  const a = atom(0)
  const {result} = renderHook(() => useLinkAtom(a))
  expect(result.current[0]).toBe(0)

  act(() => {
    result.current[1](22)
  })

  expect(result.current[0]).toBe(22)

  act(() => {
    result.current[2]({currentTarget: {value: 33}})
  })

  expect(result.current[0]).toBe(33)
})
