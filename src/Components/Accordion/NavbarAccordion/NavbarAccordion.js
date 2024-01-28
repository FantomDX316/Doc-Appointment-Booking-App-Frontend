// -----------------------------------------------------------------Imports----------------------------------------------------
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavbarAccordion.module.css";
// ----------------------------------------------------------------------------------------------------------------------------


const NavbarAccordion = ({ index }) => {
    // -------------------------------------------------------------------States---------------------------------------------------
    const blogArray = [{ path: "/blogs", value: "Blogs" },
    { path: "/my-blogs", value: "My Blogs" },
    { path: "/create-blog", value: "Create Blog" }]
    // ----------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------Functions---------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------
    return (
        <div className={`${styles.accordionContainer} accordion accordion-flush`} id="accordionFlushExample">
            {Array(3).fill(0).map((_, index) => {
                return (
                    <div className={`${styles.accordionWrapper} accordion-item`}>
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><ul><li>hello</li></ul></div>
                        </div>
                    </div>

                )
            })}
            <div className={`${styles.accordionWrapper} accordion-item`}>
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        Blog
                    </button>
                </h2>
                <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><ul>
                        {
                            blogArray.map((blogItem) => {
                                return (<>

                                    <li><Link className="dropdown-item" to={blogItem?.path}>{blogItem?.value}</Link></li>
                                </>

                                )
                            })
                        }
                    </ul></div>
                </div>
            </div>
        </div>
    )
}

export default NavbarAccordion
