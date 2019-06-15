import React from 'react'

import '../styles/wordpress-content.scss'

const WordpressContent = ({ content }) => (
  <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: content }}/>
)

export default WordpressContent