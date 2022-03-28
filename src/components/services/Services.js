import React from 'react'
import photo01 from '../../images/IllustrationServices01.svg'
import photo02 from '../../images/IllustrationServices02.svg'
import photo03 from '../../images/IllustrationServices03.svg'
import photo04 from '../../images/IllustrationServices04.svg'
import photo05 from '../../images/IllustrationServices05.svg'
import photo06 from '../../images/IllustrationServices06.svg'
import styles from './Services.module.css'

const Services = () => {
    return (
        <section className={styles.services} id='services'>
            <div className='container'>
                <div className={styles.servicesHeader}>
                    <h6>OUR SERVICES</h6>
                    <h2>Get Benefits &#38;
                        Advantages
                        From Our Services</h2>
                </div>
                <div className='row justify-content-between'>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo01} alt='photo01' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Digital Analytics</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo02} alt='photo02' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Content Marketing</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo03} alt='photo03' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Social Marketing</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo04} alt='photo04' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Target Advertising</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo05} alt='photo05' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Email Marketing</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className={`${styles.card} d-flex flex-column align-items-center h-100`}>
                            <div className={styles.cardImage}>
                                <img src={photo06} alt='photo06' />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>Page Ranking</h3>
                                <p>Sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services