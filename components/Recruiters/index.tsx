import React, {Component, useState} from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Recruiters.module.scss";


export interface RecruiterProps {
  variant: 'var1'| 'var2'
}

       const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slideToScroll:1,
      autoplay: true,
      speed: 2000,
      initialSlide:0,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          },
          
        },
          {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
          
        }
      ]
    };

const Recruiters: React.FC<RecruiterProps>  = ( sampleProp )=>{


  const [recruiters, setRecruiters] = useState([{
    company: 'Zs1',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  {
    company: 'Zs2',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  {
    company: 'Zs3',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  {
    company: 'Zs4',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  {
    company: 'Zs5',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  {
    company: 'Zs6',
    src: 'https://www.logodesign.net/logo/abstract-person-in-bulb-1093ld.png?nwm=1&nws=1&industry=recruiting&sf='  },
  ])
  

    return(
      <div className={styles.mainContainer}>
            <div className={styles.group3602}>
            <h2>
              Recruiters
            </h2>
            <p>
              MORE THAN 30 COMPANIES VISIT IET-DAVV EVERY YEAR
            </p>

        </div>
        <div className={styles.slider}>
        <Slider {...settings}>
           {recruiters.map((company)=>{
             return<div className={styles.container} key={company.company} >
              <div className={styles.img}>
              <Image
      alt="Company"
      src={company.src}
      width={100}
      height={100}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
              </div>
              
            </div>
      }) }
         
        </Slider>
        </div>
      </div>
    );
  
}

export default Recruiters;
