"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Dot Pattern Background */}
      <div className={styles.dotPattern}></div>

      <div className={styles.footerContent}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          {/* Brand Column */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  unoptimized
                />
              </Link>
            </div>
            <p className={styles.brandDescription}>
              We empower brands with innovative marketing strategies to amplify
              growth and impact.
            </p>
            <div className={styles.socialLinks}>
              <Link
                href="https://www.instagram.com/_unnity/"
                target="_blank"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/unnityglobal/"
                target="_blank"
                className={styles.socialIcon}
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://www.facebook.com/sayam.jain.719988"
                target="_blank"
                className={styles.socialIcon}
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://x.com/SayamJa92667175"
                target="_blank"
                className={styles.socialIcon}
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>UI/UX Design</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Brand Consultation</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/snapshot-project">See Our Work</Link>
              </li>
              <li>
                <Link href="/career">Careers</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              {/* <li>
                <Link href="/terms">Terms Of Service</Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>
                  SF-32, 2nd Floor, Pearl Omaxe, Netaji Subhash Place,
                  Pitampura, New Delhi – 110034
                </span>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+91 931 500 3754</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>sayam@unnity.in</span>
              </div>
              <Link
                href="https://calendly.com/sayam-unnity/30min?month=2025-12"
                target="_blank"
              >
                <button className={styles.ctaButton}>Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 Unnity. All rights reserved. | Designed by Unnity Team
          </p>
          <div className={styles.watermark}>UNNITY</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
