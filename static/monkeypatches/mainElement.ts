/* React throws an error under IE11 because
 *   `Object.prototype.toString.call(document.createElement('main'))`
 * returns
 *   "[object HTMLUnknownElement]"
 * instead of
 *   "[object HTMLElement]"
 * c.f. https://github.com/facebook/react/blob/b1a03dfdc8e42d075422556553ffe59868150e95/packages/react-dom/src/client/ReactDOMComponent.js#L466

 * Suppress this and similar errors by monkey-patching IE to pass <main />
 * off as a legit HTMLElement
 */

let main = document.createElement('main')

if (main instanceof HTMLUnknownElement) {
  // tslint:disable-next-line:deprecation
  const createElement = Document.prototype.createElement
  // tslint:disable-next-line:deprecation
  Document.prototype.createElement = function(this: Document) {
    const element: HTMLElement = createElement.apply(this, arguments as any)
    if (element.nodeName === 'MAIN') {
      Object.setPrototypeOf(element, HTMLElement.prototype)
    }
    return element
  }
  main = document.createElement('main')
}

if (main.toString() === '[object HTMLUnknownElement]') {
  const toString = HTMLElement.prototype.toString
  HTMLElement.prototype.toString = function(this: HTMLElement) {
    if (this.nodeName === 'MAIN') {
      return '[object HTMLElement]'
    }
    return toString.call(this)
  }
}

if (Object.prototype.toString.call(main) === '[object HTMLUnknownElement]') {
  const toString = Object.prototype.toString
  Object.prototype.toString = function() {
    if (this instanceof HTMLElement && this.nodeName === 'MAIN') {
      return this.toString()
    }
    return toString.call(this)
  }
}

if (getComputedStyle(main).display === 'inline') {
  const style = document.createElement('style')
  style.innerHTML = 'main { display: block; }'
  document.head.insertBefore(style, document.head.firstElementChild)
}

export {}
