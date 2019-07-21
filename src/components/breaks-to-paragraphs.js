import React from 'react'

const BreaksToParagraphs = ({ content }) => {
  let paragraphs = content.split(/\r\n|\n|\r/)

  const output = []
  for (let paragraph of paragraphs) {
    if (!paragraph) {
      continue
    }

    output.push(<p>{paragraph}</p>)
  }

  return <>{output}</>
}

export default BreaksToParagraphs