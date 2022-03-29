import React from 'react'
import styles from './Counter.module.css'

const Counter = () => {
    return (
        <section className={styles.counter}>
            <div className='container'>
                <div className={`${styles.counterContainer}`}>


                    <div className={styles.singleCounter}>
                        <h2>550+</h2>
                        <h5>ACTIVE CLIENTS</h5>
                    </div>
                    <div className={styles.singleCounter}>
                        <h2>60+</h2>
                        <h5>TEAM ADVISORS</h5>
                    </div>
                    <div className={styles.singleCounter}>
                        <h2>1,250+</h2>
                        <h5>PROJECTS DONE</h5>
                    </div>
                    <div className={styles.singleCounter}>
                        <h2>14+</h2>
                        <h5>GLORIOUS YEARS</h5>
                    </div>






                </div>
            </div>
        </section>
    )
}

export default Counter