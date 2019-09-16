export const getModalRoot = () => {
  const existing = document.getElementById('modal-root')

  if (existing) {
    return existing
  } else {
    const newElement = document.createElement('div')
    newElement.id = 'modal-root'
    document.body.appendChild(newElement)

    return newElement
  }
}
