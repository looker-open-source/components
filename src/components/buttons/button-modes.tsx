import * as React from 'react'
import { Button, LookerButtonHTMLAttributes } from './buttons'

export function grid (modes: any[], sizes: any[]) {
  modes.push(undefined)
  sizes.push(undefined)
  const matrix: React.ReactElement<LookerButtonHTMLAttributes>[][] = []


  modes.forEach((mode) => {
    const buttonRow: React.ReactElement<LookerButtonHTMLAttributes>[] = []
    sizes.forEach((size) => {
      let desc = ''
      switch (size) {
        case 'extraSmall':
          desc = 'X-Small'
          break
        case 'small':
          desc = 'Small'
          break
        case 'large':
          desc = 'Large'
          break
        default:
          desc = 'Normal'
          break
      }
      buttonRow.push(<Button size={size} mode={mode}>{desc}</Button>)
    })
    matrix.push(buttonRow)
  })

  return (
    <div>
      <table className="fizzbuzz">
        <tbody>
        {matrix.map((row, idx) => {
          return (
            <tr key={idx}>
              {row.map((button, idx) => (<td key={idx}>{button}</td>))}
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
