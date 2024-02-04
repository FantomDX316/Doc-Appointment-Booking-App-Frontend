// -------------------------------------------------------------Imports---------------------------------------------------------------
import React from 'react'
import styles from "./Therapy.module.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import dummyCardImg from "../../Assets/Images/cardImg.jpg"
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
// -----------------------------------------------------------------------------------------------------------------------------------

const Therapy = () => {
    // -------------------------------------------------------------States----------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------Hooks----------------------------------------------------------------
    const navigate = useNavigate();
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
                            <div className={`${styles.therapyCategoryCard} col-md-5 col-sm-12 col-12`}>
                                <div className={`${styles.therapyCategoryCardContentWrapper}`}>
                                    <div className={`${styles.therapyCategoryCardImg} `}>
                                        <img src={dummyCardImg}></img>
                                    </div>
                                    <div className={`${styles.therapyCategoryCardContent}`}>
                                        <div className={`${styles.therapyCategoryInfo}`}>
                                            <div className={`${styles.therapyCategoryTitle}`}>
                                                <h4>Depression</h4>
                                            </div>
                                            <div className={`${styles.therapyCategoryDesc}`}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet fuga quia illo cum
                                            </div>
                                        </div>
                                        <div className={`${styles.therapyCategorySeeMoreBtn}`} onClick={() => { navigate("/counselors-list") }}>
                                            <IoChevronForwardCircleSharp />
                                        </div>
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
