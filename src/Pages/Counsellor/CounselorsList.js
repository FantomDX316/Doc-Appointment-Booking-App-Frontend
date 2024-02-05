import React from 'react'
import CounselorCard from '../../Components/Card/CounselorCard/CounselorCard';
import styles from "./CounselorList.module.css"


const CounselorsList = () => {
    return (
        <div className={`${styles.counselorsListContainer} container`}>
            <div className="row">
                <div className={`${styles.topContent} col-md-12 col-12 col-sm-12 text-center`}>
                    Filters
                </div>
                <div className={`${styles.mainContent} col-md-12 col-12 col-sm-12 d-flex justify-content-center align-items-center p-2`}>
                    <div className={`${styles.counselorListWrapper} col-md-12 col-sm-12 col-12 d-flex justify-content-center p-1 flex-wrap gap-3`}>
                        {Array(5).fill(0).map((counselor, index) => {
                            return (
                                <CounselorCard />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounselorsList
