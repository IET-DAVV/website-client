import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import imageOne from '../../../public/Images/IET_EVENTS/IET_EVENTS_IMG1.png';
import imageTwo from '../../../public/Images/IET_EVENTS/IET_EVENTS_IMG2.png';
import imageThree from '../../../public/Images/IET_EVENTS/IET_EVENTS_IMG3.png';

import styles from './EventSection.module.scss';

type Props = {};

const EventSection = (props: Props) => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y1 = useTransform(scrollYProgress, [0, 1], [-500, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 250]);
  return (
    <div ref={ref} className={styles.event_section}>
      <div className={styles.left_section}>
        <motion.h1 style={{ x }} className={styles.college_name}>
          IET
        </motion.h1>
        <h1 className={styles.college_event}>Events</h1>
      </div>
      <div className={styles.right_section}>
        <motion.div style={{ y: y1 }} className={styles.column_one}>
          <div className={styles.halfcard} />
          <div className={styles.card}>
            <Image src={imageOne} className={styles.image} />
          </div>
          <div className={styles.halfcard} />
        </motion.div>
        <motion.div style={{ y: y2 }} className={styles.column_two}>
          <div className={styles.halfcard} />
          <div className={styles.card}>
            <Image src={imageTwo} className={styles.image} />
          </div>
          <div className={styles.card}>
            <Image src={imageThree} className={styles.image} />
          </div>
          <div className={styles.halfcard} />
        </motion.div>
        <motion.div style={{ y: y1 }} className={styles.column_three}>
          <div className={styles.halfcard} />
          <div className={styles.card} />
          <div className={styles.halfcard} />
        </motion.div>
      </div>
    </div>
  );
};

export default EventSection;
