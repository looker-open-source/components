import React from 'react'

const SvgDragHandle = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h24v24H0V0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <path clipPath="url(#b)" d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
)

export default SvgDragHandle
