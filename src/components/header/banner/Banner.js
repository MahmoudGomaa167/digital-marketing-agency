import React from 'react'
import illustration from '../../../images/Illustration.svg'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className='container h-100'>
                <div className='row align-items-center h-100'>
                    <div className='col-md-6 mb-5'>
                        <div className={`${styles.bannerInfo} d-flex flex-column`}>
                            <h1>Grow Your Business with <span>Digital Marketing</span> </h1>
                            <p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat,  sed diam voluptua.</p>
                            <div className={styles.bannerButton}>
                                <button>
                                    <span>get started now</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <img src={illustration} alt='illustration' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner