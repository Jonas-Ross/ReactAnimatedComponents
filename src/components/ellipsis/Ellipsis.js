import React from 'react'
import './index.css'

export default function Ellipsis({text, textColor}) {
  return (
    <div style={{display: 'flex'}} className='loading'>
      <div style={{color: textColor}}>{text}</div>
    </div>
  )
}
