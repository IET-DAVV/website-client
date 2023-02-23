import { useState } from 'react';

import Image from 'next/image';
import arrowRight from '../../assets/icons/arrowRight.svg';
import styles from './AcademicPrograms.module.scss';

const AcademicProgramsSection = () => {
  const [filter, setFilter] = useState('bachelor');

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

      {filter === 'bachelor' && (
        <div className={styles.Grid}>
          <div className={styles.card}>
            <div className={`${styles.cardTitle}`}>
              <h2>Computer Engineering</h2>
              <span className={` ${styles.arrowIcon}`}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={`${styles.badge}`}>Bachelor</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Electronics & Instrumentation</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Bachelor</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Electronics & Telecommunication</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Bachelor</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Information Technology</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Bachelor</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Mechanical Engineering</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Bachelor</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Civil Engineering</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Bachelor</div>
          </div>
        </div>
      )}

      {filter === 'masters' && (
        <div className={styles.Grid}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>
                Computer Engineering with specialization in Software Engineering
              </h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>
                Information Technology with specialization in Information
                Security
              </h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>
                Electronics engineering with specialization in Digital
                Instrumentation
              </h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>
                Electronics engineering with specialization in Digital
                Communication
              </h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Industrial Engineering & Management</h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>
                Mechanical Engineering with specialization in Design & Thermal
                Engineering
              </h2>
              <span className={styles.arrowIcon}>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className={styles.badge}>Masters</div>
          </div>
        </div>
      )}

      {filter === 'phd' && (
        <div className={styles.Grid}>
          <h2 className={styles.phdCard}>
            PhD programme is also offered in all disciplines of BE/ME Programmes
            & all relevant areas of interest. Research component of IET is also
            strong while a number of research scholars from other reputed
            organizations such as SGSITS, AICTE, RRCAT, NRCS, IIITA, etc. have
            registered for PhD programme in various departments of IET.
          </h2>
        </div>
      )}
    </div>
  );
};
export default AcademicProgramsSection;
