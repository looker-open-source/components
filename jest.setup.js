const Adapter = require('enzyme-adapter-react-16')
const Enzyme = require('enzyme')
require('@testing-library/jest-dom/extend-expect')

Enzyme.configure({ adapter: new Adapter() })

const observeMock = function(cb, config) {
  this.observeCallback = cb
  this.observeConfig = config
  this.disconnect = jest.fn()
  this.observe = jest.fn()
}

const globalAny = global
globalAny.IntersectionObserver = observeMock

beforeAll(() => {
  jest.resetAllMocks()
})
