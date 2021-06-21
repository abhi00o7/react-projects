// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1> {title} </h1>
            {/* <h1> {props.title} </h1> */}
            <Button color='green' text='Hello' />
        </header>
    )
}
Header.defaultProps = {
    title: 'Goal Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header