import React from 'react'
import styles from './Header.module.css'
import HeaderInfo from './headerInfo/HeaderInfo';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';

const Header = () => {
    return (
        <header className={styles.header} id='home'>

            <HeaderInfo />
            <Navbar />
            <Banner />
        </header>
    )
}

export default Header