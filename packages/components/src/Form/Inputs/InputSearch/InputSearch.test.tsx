import 'jest-styled-components'
import React from 'react'
import { mountWithTheme } from '@looker/components-test-utils'
import { assertSnapshot } from '@looker/components-test-utils'
import { InputSearch } from './InputSearch'

test('InputSearch default', () => {
  assertSnapshot(<InputSearch />)
})

test('InputSearch displays placeholder', () => {
  const wrapper = mountWithTheme(<InputSearch placeholder="Type your search" />)
  expect(wrapper.props().children.props.placeholder).toEqual('Type your search')
})

test('InputSearch displays value', () => {
  const wrapper = mountWithTheme(<InputSearch value="start value" />)
  expect(wrapper.props().children.props.value).toEqual('start value')
})

test('InputSearch displays summary', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" />
  )
  expect(wrapper.props().children.props.summary).toEqual('summary value')
})

test('InputSearch clears bottom when input value is empty', () => {
  const wrapper = mountWithTheme(<InputSearch value="start value" />)

  expect(wrapper.find('input').props().value).toEqual('start value')
  wrapper.find('button').simulate('click')
  expect(wrapper.find('input').props().value).toEqual('')
})

test('InputSearch shows clear button and summary', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" />
  )
  expect(wrapper.find('button').exists()).toEqual(true)
  expect(wrapper.props().children.props.summary).toEqual('summary value')
})

test('InputSearch hides controls when using the flag hideControls', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" hideControls />
  )
  expect(wrapper.find('button').exists()).toEqual(false)
})
