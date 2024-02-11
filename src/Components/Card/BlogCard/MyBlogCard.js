import React from 'react'
import "./MyBlogCard.css"
import DummyImage from "../../../Assets/Images/bgImg.jpg"

const MyBlogCard = () => {
    return (
        <>
            <div>
                <div class="blog-slider">
                    <div class="blog-slider__wrp swiper-wrapper">
                        <div class="blog-slider__item swiper-slide">
                            <div class="blog-slider__img">
                                <img src={DummyImage} alt="" />
                            </div>
                            <div class="blog-slider__content">
                                <span class="blog-slider__code">26 December 2019</span>
                                <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                                <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                <a href="#" class="blog-slider__button">READ MORE</a>
                            </div>
                        </div>

                    </div>
                    <div class="blog-slider__pagination"></div>
                </div>
            </div>
        </>
    )
}

export default MyBlogCard
