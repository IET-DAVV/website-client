import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import { icons, images } from '../../assets';

import styles from './Achievements.module.scss';

export interface AchievementProps {
  sampleProp: string;
}

const Achievement: React.FC<AchievementProps> = ({ sampleProp }) => {
  const { ArrowCircleRight, ArrowCircleLeft } = icons;
  const { sihwinner } = images;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  function handleAfterChange(index: number) {
    setCurrentSlideIndex(index);
  }
  const [Achievements, setAchievement] = useState([
    {
      title: 'sih winners',
      year: '2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus',
      src: sihwinner,
      url: 'url2',
    },
    {
      title: 'sih winners',
      year: '2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus',
      src: sihwinner,
      url: 'url1',
    },
  ]);
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
    //Achievements.length is the size of our array, do not forgot to mention the size of array
    setCurrentSlideIndex((currentSlideIndex + 1) % Achievements.length);
  };
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
    setCurrentSlideIndex((currentSlideIndex - 1) % Achievements.length);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
    afterChange: handleAfterChange,
  };
  const itemsRef = useRef<Array<HTMLParagraphElement | null>>([]);
  // you can access the elements with itemsRef.current[n]
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, Achievements.length);
  }, [Achievements]);
  const slides = Achievements.map((slide, i) => {
    const showText = () => {
      itemsRef.current[currentSlideIndex]?.classList.remove(
        styles.descEllipsis
      );
    };
    return (
      <div className={styles.group3646} key={i}>
        <div className={styles.achievementinfo}>
          <p className={styles.year}>{slide.year}</p>
          <p className={styles.title}>{slide.title}</p>
          <p
            className={`${styles.desc}  ${styles.descEllipsis}`}
            onClick={() => showText()}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            role="presentation"
          >
            {slide.description}
          </p>
        </div>
        <div className={styles.image120}>
          <Image
            src={slide.src}
            alt="Achievement Image"
            height="450"
            width="850"
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
          <Slider ref={sliderRef} {...settings}>
            {slides}
          </Slider>
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
