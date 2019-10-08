import React, { useState } from 'react'

const getDefaultValue = ({ defaultValue, type, flowType }: any) => {
  const propType = flowType || type
  if (!defaultValue.value) return null
  if (defaultValue.value === "''") {
    return '[Empty string]'
  }
  if (propType && propType.name === 'string') {
    return defaultValue.value.replace(/'/g, '"')
  }
  if (typeof defaultValue.value === 'object' && defaultValue.value.toString) {
    return defaultValue.value.toString()
  }
  return defaultValue.value
}

interface PropProps {
  propName: string
  prop: any
  getPropType: any
}

const Prop: React.FC<PropProps> = ({ propName, prop, getPropType }) => {
  const [showing, setShowing] = useState(false)
  if (!prop.type && !prop.flowType) return null

  const toggle = () => setShowing(s => !s)
  return (
    <div>
      <div>
        <div>{propName}</div>
        <div>{getPropType(prop)}</div>
        {prop.defaultValue && (
          <div>
            <em>{getDefaultValue(prop)}</em>
          </div>
        )}
        <div>
          {prop.required && (
            <div>
              <strong>required</strong>
            </div>
          )}
          {prop.description && (
            <button onClick={toggle}>{showing ? 'Hide' : 'Show'}</button>
          )}
        </div>
      </div>
      {showing && prop.description && <div>{prop.description}</div>}
    </div>
  )
}

const Props = ({ props, getPropType }) => {
  const entries = Object.entries(props)

  return (
    <div>
      {entries.map(([key, prop]) => (
        <Prop key={key} propName={key} prop={prop} getPropType={getPropType} />
      ))}
    </div>
  )
}

export default Props
