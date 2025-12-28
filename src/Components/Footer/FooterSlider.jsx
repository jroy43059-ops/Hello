import React, { Component } from "react";
import Slider from "react-slick";

import styles from "./Footer.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import footerLogo1 from '../../Assets/footerLogo1.svg'
import footerLogo2 from '../../Assets/footerLogo2.svg'
import footerLogo3 from '../../Assets/footerLogo3.svg'
import footerLogo4 from '../../Assets/footerLogo4.svg'

export default class FooterSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
      <div className={styles.sliderContainer} >
        <Slider {...settings}>
          <div className={styles.footerSliderCard} >
            <img src={footerLogo1} alt="" />
            <h2>SATISFIED CUSTOMERS</h2>
            <h2>45,00,000</h2>
          </div>
          <div className={styles.footerSliderCard} >
            <img width='80px' src={footerLogo2} alt="" />
            <h2>HOMEGROWN</h2>
            <h2>Made in India</h2>
          </div>
          <div className={styles.footerSliderCard} >
            <img width='50px' src={footerLogo3} alt="" />
            <h2>FREE SHIPPING IN INDIA</h2>
            <h2>Fast Delivery</h2>
          </div>
          <div className={styles.footerSliderCard} >
            <img width='40px' src={footerLogo4} alt="" />
            <h2>INTERNATIONAL SHIPPING</h2>
            <h2>Worldwide</h2>
          </div>

        </Slider>
      </div>
    );
  }
}