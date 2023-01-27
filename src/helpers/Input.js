import React from 'react'
import "./style.scss"

const Input = ({classN , placeholder , type , Change}) => {
  return (
    <input  className={`inp ${classN ? classN : ""}`} 
        placeholder={placeholder} type={type} onChange={Change} />
  )
}

export default Input