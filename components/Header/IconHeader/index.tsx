import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './IconHeader.module.scss';

const IconHeader = () => {
  const nav = [
    { id: '1', name: 'Home', href: '/' },
    { id: '2', name: 'About Us', href: '/about' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <h3 className={styles.institute}>
          Institute of Engineering and Technology
        </h3>
      </div>
      <div className={!open ? styles.mobile_links : styles.links}>
        {nav.map((item) => (
          <div key={item.id} className="">
            <Link
              href={item.href}
              className={open ? styles.link : styles.mobile_link}
            >
              {/* <a href="#" className={open ? styles.link : styles.mobile_link}> */}
              {item.name}
              {/* </a> */}
            </Link>
          </div>
        ))}
        <div className={open ? styles.dropd : styles.mobile_dropd}>
          <div className="">
            <div className={styles.link}>
              <p className={styles.inner}>Academics</p>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25031 7.40807L0 2.27725L1.75093 0.567383L5.25031 3.98833L8.74969 0.567383L10.5006 2.27725L5.25031 7.40807Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className={styles.link}>
              <p className={styles.inner}>Admission</p>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25031 7.40807L0 2.27725L1.75093 0.567383L5.25031 3.98833L8.74969 0.567383L10.5006 2.27725L5.25031 7.40807Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className={styles.link}>
              <p className={styles.inner}>Hostel</p>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25031 7.40807L0 2.27725L1.75093 0.567383L5.25031 3.98833L8.74969 0.567383L10.5006 2.27725L5.25031 7.40807Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <Link href="/fresher">
            <a
              href="/fresher"
              className={!open ? styles.mobile_corner : styles.corner}
            >
              Fresher&apos;s Corner
            </a>
          </Link>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setOpen(!open)}
        className={styles.mobile_open}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.290527H20V3.548H0V0.290527ZM0 8.43421H20V11.6917H0V8.43421ZM0 16.5779H20V19.8354H0V16.5779Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconHeader;
