import React, { useRef, useEffect } from 'react'
import chooseImage from '../../images/IllustrationChoose.svg'
import styles from './Choose.module.css'

const Choose = () => {
    const choose = useRef();


    useEffect(() => {
        progressOnScroll()
    }, [])

    const progressOnScroll = () => {
        let progressSectionOffset = choose.current.offsetTop;
        let progressPercent = document.querySelectorAll('.progressPercent');
        let percent = document.querySelectorAll('.percent');
        console.log(percent)

        window.addEventListener('scroll', () => {
            if (Math.floor(window.scrollY) > progressSectionOffset - 200) {
                progressPercent.forEach((element) => {
                    element.style.width = `${element.dataset['width']}%`;
                });
                percent.forEach(element => {
                    element.style.opacity = '1'
                })
            } else {
                progressPercent.forEach((element) => {
                    element.style.width = 0;
                })
                percent.forEach(element => {
                    element.style.opacity = '0'
                })
            }

        })
    }




    return (
        <section className={styles.choose} id="choose" ref={choose}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 mb-5'>
                        <div className={styles.chooseInfo}>
                            <div className={styles.chooseHeader}>
                                <h6>WHY CHOOSE US</h6>
                                <h2>We Dedicated To Our<br />
                                    Best Service</h2>
                                <p>From Digital Analytics to Email Marketing, our team are true
                                    experts in their field.</p>
                            </div>

                            <div className={styles.chooseProgress}>
                                <div className={styles.progress}>
                                    <div className={styles.progressHeader}>
                                        <h4>Digital Analytics</h4>
                                        <span className='percent'>90%</span>
                                    </div>
                                    <div className={styles.bar}><span data-width="90" className='progressPercent'></span></div>
                                </div>
                                <div className={styles.progress}>
                                    <div className={styles.progressHeader}>
                                        <h4>Page Ranking</h4>
                                        <span className='percent'>85%</span>
                                    </div>
                                    <div className={styles.bar}>
                                        <span data-width="85" className='progressPercent'></span>
                                    </div>
                                </div>
                                <div className={styles.progress}>
                                    <div className={styles.progressHeader}>
                                        <h4>Social Marketing</h4>
                                        <span className='percent'>80%</span>
                                    </div>
                                    <div className={styles.bar}><span data-width="80" className='progressPercent'></span></div>
                                </div>
                                <div className={styles.progress}>
                                    <div className={styles.progressHeader}>
                                        <h4>Content Marketing</h4>
                                        <span className='percent'>95%</span>
                                    </div>
                                    <div className={styles.bar}><span data-width="95" className='progressPercent'></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 d-flex align-items-center justify-content-center'>
                        <div className={`${styles.chooseImage}`}>
                            <img src={chooseImage} alt="choose" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose