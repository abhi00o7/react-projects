// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header