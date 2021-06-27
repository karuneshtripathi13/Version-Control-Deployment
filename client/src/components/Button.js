import PropTypes from 'prop-types'
import React from 'react'
const Button = (props) => {
    return (
        <button
        className='btn'
        style={{backgroundColor:props.color}}
        onClick={props.data}
        >
         {props.text}
        </button>
    )
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    clickevent:PropTypes.func,
}
export default Button
