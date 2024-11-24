import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { icon: '/icons/spotify.svg', href: '#' },
    { icon: '/icons/instagram.svg', href: '#' },
    { icon: '/icons/tiktok.svg', href: '#' },
    { icon: '/icons/youtube.svg', href: '#' },
    { icon: '/icons/twitter.svg', href: '#' },
    { icon: '/icons/telegram.svg', href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.locationInfo}>
          <h2 className={styles.title}>Our Location</h2>
          <p className={styles.address}>
            Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124
          </p>
          <p className={styles.customerService}>
            Customer Service +6282-2876-6862
          </p>
          <p className={styles.hours}>
            We Are Open from Sun - Mon 10 AM - 22 PM
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className={styles.socialIcon}>
                <Image
                  src={link.icon}
                  alt="Social Media"
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>

          <div className={styles.deliverySection}>
            <span className={styles.deliveryText}>Delivery Order</span>
            <div className={styles.storeButtons}>
              <Link href="#" className={styles.storeButton}>
                <Image
                  src="/app-store-badge.png"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                />
              </Link>
              <Link href="#" className={styles.storeButton}>
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2023 IMAJI COFFEE, All rights reserved</p>
          <div className={styles.links}>
            <Link href="/terms">Terms and Conditions</Link>
            <span className={styles.divider}>|</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
