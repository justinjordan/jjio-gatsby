import React from 'react'

const FeaturedImage = ({ src }) => (
  <div style={{
    display: `inline-block`,
    width: `100%`,
    height: `50vh`,
    backgroundImage: `url('${src}')`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  }}/>
)

export default FeaturedImage
