import React from 'react'
import styles from './HeaderInfo.module.css'

const HeaderInfo = () => {
    return (
        <div className={`${styles.headerInfo}`}>
            <div className={`${styles.container} container d-flex justify-content-between align-items-center h-100`}>
                <div className={`${styles.agency} d-flex align-items-center`}>
                    <p className='m-0'>YOUR LOCAL DIGITAL MARKETING AGENCY</p>
                </div>

                <div className={`${styles.headerInfoSocial} d-flex`}>
                    <div className={styles.agencyPhone}>
                        <i class="fa-solid fa-phone"></i>
                        <span>(800) 123-5678</span>
                    </div>
                    <div className={styles.agencyEmail}>
                        <i class="fa-solid fa-envelope"></i>
                        <span>info@demmoo.com</span>
                    </div>
                    <div className={`${styles.socialIcons} d-flex align-items-center`}>
                        <a href='#home'>
                            <i class="fa-brands fa-facebook-square"></i>
                        </a >
                        <a href='#home'>
                            <i class="fa-brands fa-twitter-square"></i>
                        </a>
                        <a href='#home'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='#home'>
                            <i class="fa-brands fa-instagram-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo