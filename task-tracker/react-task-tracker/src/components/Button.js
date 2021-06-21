// import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <button className='btn' onClick={onClick} style={{backgroundColor: color}}> {text} </button>

    )
}
Button.defaultProps = {
    text: 'Add',
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
export default Button
