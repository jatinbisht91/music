import React from 'react'

const Banner = ({ children }) => {
    return (
        <div className="row container-fluid text-center banner my-3 d-flex justify-content-center align-items-center">{children}</div>
    )
}

export default Banner