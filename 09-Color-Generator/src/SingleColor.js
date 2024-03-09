import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(time)
  }, [alert])

  return (
    <article onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }} className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='precent-value'>{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className='alert'>copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
