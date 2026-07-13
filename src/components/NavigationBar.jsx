import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark shadow"
                style={{
                    background: "linear-gradient(to right, #ff512f, #dd2476)"
                }}
            >
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        🚗 Car Rental App
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white" to="/">Home</Link>
                            <Link className="nav-link text-white" to="/add">Add Car</Link>
                            <Link className="nav-link text-white" to="/view">View Cars</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar