"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/slickCompany/ceel.png"
    },
    {
        imgSrc: "/assets/slickCompany/harvest.png"
    },
    {
        imgSrc: "/assets/slickCompany/ohana.png"
    },
    // {
    //     imgSrc: "/assets/slickCompany/google.svg"
    // },
    // {
    //     imgSrc: "/assets/slickCompany/walmart.svg"
    // },
    // {
    //     imgSrc: "/assets/slickCompany/fedex.svg"
    // },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg my-10 text-lightgrey">Ils m'ont permit de me faire ma petite expérience</h2>
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} style={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
