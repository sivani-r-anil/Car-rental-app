import React from 'react'

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
                            <a className="nav-link text-white" href="/">Home</a>
                            <a className="nav-link text-white" href="/add">Add Car</a>
                            <a className="nav-link text-white" href="/view">View Cars</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar