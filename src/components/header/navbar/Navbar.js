import React from 'react'
import logo from '../../../images/Logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${styles.navList} collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pages">pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">contact</a>
                        </li>


                    </ul>
                    <form className={`${styles.navButton}`}>
                        <button >
                            <span>get started</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar