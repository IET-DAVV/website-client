import Image from 'next/image';

import { useRef, useState } from 'react';

import Slider from 'react-slick';

import { icons, images } from '../../assets';

import styles from './Achievements.module.scss';

export interface AchievementProps {
  sampleProp: string;
}
const Achievement: React.FC<AchievementProps> = ({ sampleProp }) => {
  const { ArrowCircleRight, ArrowCircleLeft } = icons;
  const { sihwinner } = images;
  const [Achievements, setAchievement] = useState([
    {
      title: 'sih winners',
      year: '2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus',
      src: sihwinner,
      url: 'url1',
    },
    {
      title: 'sih winners',
      year: '2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus',
      src: sihwinner,
      url: 'url2',
    },
  ]);
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    ref: sliderRef,
    autoplay: true,
    arrows: false,
  };
  const slides = Achievements.map((slide) => {
    return (
      <div className={styles.group3646} key={slide.url}>
        <div className={styles.achievementinfo}>
          <div id={styles.year}>
            <p>{slide.year}</p>
          </div>
          <div id={styles.title}>
            <p>{slide.title}</p>
          </div>
          <div id={styles.desc}>
            <p>{slide.description}</p>
          </div>
        </div>
        <div className={styles.image120}>
          <Image
            src={slide.src}
            alt="Achievement Image"
            height="500"
            width="900"
            className={styles.Image}
          />
        </div>
      </div>
    );
  });
  return (
    <div className={styles.group3664}>
      <div className={styles.heading}>
        <h1>Achievements</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.btn}>
          <button onClick={handlePrev} type="button">
            <div>
              <Image src={ArrowCircleRight} />
            </div>
          </button>
        </div>
        <div className={styles.slider}>
          <Slider {...settings}>{slides}</Slider>
        </div>
        <div className={styles.btnright}>
          <button onClick={handleNext} type="button">
            <div>
              <Image src={ArrowCircleLeft} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
