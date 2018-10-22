import * as React from 'react'
import { Manager, Popper, Reference } from 'react-popper'
// import { Button } from '../Button';

export const PopperExample: React.SFC = () => (
  <Manager>
    <Reference>
      {({ ref }) => {
        return (
          <button type="button" ref={ref}>
            Reference element
          </button>
        )
      }}
    </Reference>
    <Popper placement="bottom">
      {({ ref, style, placement, arrowProps }) => (
        <div ref={ref} style={style} data-placement={placement}>
          Popper element
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
)
