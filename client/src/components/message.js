import React from 'react'
import PropTypes from 'prop-types'
const message = ({msg}) => {
    return (
        <div id='one' className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>{msg}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

message.propTypes = {
    msg:PropTypes.string.isRequired,
}

export default message
