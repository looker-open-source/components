import React from 'react'
import styled from 'styled-components'

interface ImgProps {
  src: string
}

const Img = styled.img`
  max-width: 100%;
`

const ImgLink: React.FC<ImgProps> = ({ src, ...props }) => {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <Img src={src} {...props} />
    </a>
  )
}

export default ImgLink
