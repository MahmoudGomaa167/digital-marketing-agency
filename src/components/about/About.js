import React from 'react'
import aboutImage from '../../images/Illustration.jpg'
import styles from './About.module.css'

export const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mb-5'>
                        <div className={styles.aboutImage}>
                            <img src={aboutImage} alt="about" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles.aboutBrief}>
                            <h6>ABOUT US</h6>
                            <h2>Start Business With US</h2>
                            <p>Over 12 years Demmoo helping companies to reach their
                                financial and branding goals.</p>
                            <p>Over the years, we have worked with Fortune 500s and brand-new startups
                                We help ambitious businesses like yours generate more profits by building
                                awareness, driving web traffic, connecting with customers, and growing
                                overall sales. Give us a call.</p>
                            <button>
                                <span>get started now</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
