import React from 'react'

const SvgChartBubble = props => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={7.2} cy={14.4} r={3.2} />
    <circle cx={14.8} cy={18} r={2} />
    <circle cx={15.2} cy={8.8} r={4.8} />
  </svg>
)

export default SvgChartBubble
