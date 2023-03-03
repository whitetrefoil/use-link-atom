@whitetrefoil/use-link-atom
============================

A tiny helper to link Jotai's useAtom / useSetAtom & events.

Usage
-----

```tsx
import {useLinkAtom, useLinkSetAtom} from '@whitetrefoil/use-link-atom'
import {atom} from 'jotai/vanilla'


const valAtom = atom('')
const countAtom = atom(0)

const MyElem = () => {
  const [val, setVal, linkVal] = useLinkAtom(valAtom)
  const [setCount, linkCount] = useLinkSetAtom(countAtom)
  return <>
    <input type="text" value={val} onChange={linkVal}/>
    <input type="number" defaultValue={0} onChange={linkCount}/>
  </>
}

```
