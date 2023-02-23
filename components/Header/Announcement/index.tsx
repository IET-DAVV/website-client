import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import styles from './Announcement.module.scss';

const Announcement = () => {
  const marquee = [
    { id: '1', name: 'Practical Exam Time-Table ', link: '#' },
    { id: '2', name: 'Practical Exam Time-Table ', link: '#' },
    { id: '3', name: 'Practical Exam Time-Table ', link: '#' },
    { id: '4', name: 'Practical Exam Time-Table ', link: '#' },
  ];
  return (
    <div className={styles.announce}>
      <div className={styles.left}>
        <svg
          className={styles.announce__icon}
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9865 15.4221H11.5479L8.84063 17.8939C8.47326 18.2294 8.02189 18.3971 7.4865 18.3971C6.95175 18.3971 6.50069 18.2294 6.13333 17.8939L3.42604 15.4221C3.05868 15.0867 2.875 14.671 2.875 14.1752C2.875 13.6794 3.05868 13.2637 3.42604 12.9283L6.10938 10.4783V5.5127L16.9865 15.4221ZM6.92396 3.82832C8.63299 2.83666 10.4816 2.43911 12.4698 2.6357C14.4587 2.83286 16.1719 3.5877 17.6094 4.9002C19.0469 6.2127 19.8733 7.77661 20.0886 9.59195C20.3045 11.4079 19.8694 13.096 18.7833 14.6564L17.3938 13.3877C18.1125 12.1919 18.3642 10.9266 18.1489 9.59195C17.933 8.25786 17.2979 7.10957 16.2438 6.14707C15.1896 5.18457 13.9319 4.60474 12.4708 4.40757C11.009 4.21099 9.62326 4.44082 8.31354 5.09707L6.92396 3.82832ZM9.75104 6.40957C10.6615 6.16166 11.5799 6.11061 12.5063 6.25645C13.4326 6.40228 14.2313 6.78145 14.9021 7.39395C15.5729 8.00645 15.984 8.73211 16.1355 9.57095C16.2875 10.4092 16.2278 11.2439 15.9563 12.0752L14.3271 10.5877C14.3271 10.2231 14.2673 9.86932 14.1479 9.52632C14.0278 9.18391 13.8319 8.88874 13.5604 8.64082C13.2729 8.37832 12.9417 8.18874 12.5666 8.07207C12.191 7.95541 11.7955 7.89707 11.3802 7.89707L9.75104 6.40957Z"
            fill="white"
          />
        </svg>
        <h3 className={styles.announce__text}>Announcements</h3>
      </div>
      <div className={styles.marq}>
        <Marquee
          gradient={false}
          className={styles.marquee}
          pauseOnHover
          loop={0}
        >
          {marquee.map((item) => (
            <Link key={item.id} href={item.link}>
              <a href={item.link} className={styles.link}>
                {' '}
                {item.name} |{' '}
              </a>
            </Link>
          ))}
        </Marquee>
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

export default Announcement;
