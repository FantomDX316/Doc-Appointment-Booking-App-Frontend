// -------------------------------------------------------------Imports---------------------------------------------------------------
import React from 'react'
import styles from "./Therapy.module.css"
import { IoMdArrowRoundBack } from "react-icons/io";
// -----------------------------------------------------------------------------------------------------------------------------------

const Therapy = () => {
    // -------------------------------------------------------------States----------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------Hooks----------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------Functions----------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------useEffects----------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className={`${styles.therapyContainer}`}>
            <div className={`${styles.therapyTopContent}`}>
                <div className={`${styles.backBtn}`}>
                    <IoMdArrowRoundBack className={`${styles.backIcon}`} />
                </div>
                <div className={`${styles.topTitle} text-center`}>
                    <h1>Who do you want to consult?</h1>
                    <h6>Therapy can help you cope with emotional struggles that are making it difficult for you to function well.</h6>
                </div>
            </div>
            <div className={`${styles.therapyMidContent}`}>
                <div className={`${styles.therapyCategoriesContainer}`}>
                    {Array(6).fill(0).map(() => {
                        return (
                            <div className={`${styles.therapyCategoryCard} col-md-5 col-sm-5 col-12`}>
                                <div className={`${styles.therapyCategoryCardContentWrapper}`}>
                                    <div className={`${styles.therapyCategoryCardImg} `}>

                                    </div>
                                    <div className={`${styles.therapyCategoryCardContent}`}>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Therapy
