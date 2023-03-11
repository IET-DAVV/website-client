import { useState } from 'react';

import Image from 'next/image';
import arrowRight from '../../assets/icons/arrowRight.svg';
import styles from './AcademicPrograms.module.scss';

type CourseDataType = {
  [k: string]: string[];
}

const courseData: CourseDataType = {
  bachelor: [
    'Computer Engineering',
    'Electronics & Instrumentation',
    'Electronics & Telecommunication',
    'Information Technology',
    'Mechanical Engineering',
    'Civil Engineering',
  ],
  masters: [
    'Computer Engineering with specialization in Software Engineering',
    'Information Technology with specialization in Information Security',
    'Electronics engineering with specialization in Digital Instrumentation',
    'Electronics engineering with specialization in Digital Communication',
    'Industrial Engineering & Management',
    'Mechanical Engineering with specialization in Design & Thermal Engineering',
  ]
}

const AcademicProgramsSection = () => {

  const [filter, setFilter] = useState('bachelor');

  let courseTagName = '';

  switch (filter) {
    case 'masters':
      courseTagName = 'masters'
      break;
    case 'phd':
      courseTagName = 'phd'
      break;
    default:
      courseTagName = 'bachelor'
      break;
  }

  function data(course: keyof CourseDataType) {
    return courseData[course];
  }

  return (
    <div className={styles.academicSection}>
      <h1 className={styles.sectionTitle}>ACADEMIC PROGRAMS</h1>

      <ul className={styles.academicTags}>
        <li>
          <button
            className={filter === 'bachelor' ? `${styles.highlight}` : ''}
            type="button"
            onClick={() => setFilter('bachelor')}
          >
            Bachelor
          </button>
        </li>
        <li>
          <button
            className={filter === 'masters' ? `${styles.highlight}` : ''}
            type="button"
            onClick={() => setFilter('masters')}
          >
            Masters
          </button>
        </li>
        <li>
          <button
            className={filter === 'phd' ? `${styles.highlight}` : ''}
            type="button"
            onClick={() => setFilter('phd')}
          >
            PhD
          </button>
        </li>
      </ul>

      <div className={styles.Grid}>
        {
          data(filter)?.map((name: string) => {
            return (
              <div key={name} className={styles.card}>
                <div className={`${styles.cardTitle}`}>
                  <h2>{name}</h2>
                  <span className={` ${styles.arrowIcon}`}>
                    <Image
                      src={arrowRight}
                      alt="arrow right"
                      width={30}
                      height={30}
                    />
                  </span>
                </div>

                <div className={`${styles.badge}`}>{courseTagName}</div>
              </div>
            )
          })
        }

        {
          courseTagName === 'phd' && (
            <h2 className={styles.phdCard}>
              PhD programme is also offered in all disciplines of BE/ME Programmes
              & all relevant areas of interest. Research component of IET is also
              strong while a number of research scholars from other reputed
              organizations such as SGSITS, AICTE, RRCAT, NRCS, IIITA, etc. have
              registered for PhD programme in various departments of IET.
            </h2>
          )
        }
      </div>
    </div>
  );
};
export default AcademicProgramsSection;
