"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '../../../public/assets/imageUrls';

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on Sign In and Sign Up pages
  if (!pathname) return null;
  const lower = pathname.toLowerCase();
  if (lower.includes('/pages/login') || lower.includes('/pages/signup')) {
    return null;
  }
  return (
    <footer className="bg-black text-white">
      {/* Logo and Hotel Name Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col items-center justify-center text-center ">
          <div className="relative w-36 h-16 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-8 object-contain mx-auto"
              />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-sans tracking-widest mb-2">
              THE ANJANA GUEST
            </h2>
            <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400">
              AURADHAPURA - SRI LANKA
            </p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-800"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">
          {/* Hotel Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-sans mb-4 tracking-wider">ANJANA GUEST</h3>
              <div className="space-y-3 text-md text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>48, JANADHIPATHI MAWATHA,<br />COLOMBO 01, SRI LANKA.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+94112421221" className="hover:text-gray-100 transition-colors">
                    +94 111 111 111
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 mb-1">INQUIRIES:</p>
                    <a 
                      href="mailto:info@anjanaguest.com" 
                      className="hover:text-gray-100 transition-colors break-all"
                    >
                      INFO@ANJANAGUEST.COM
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 mb-1">RESERVATIONS:</p>
                    <a 
                      href="mailto:reservations@anjanaguest.com" 
                      className="hover:text-gray-100 transition-colors break-all"
                    >
                      RESERVATIONS@ANJANAGUEST.COM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/indulgence" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  INDULGENCE
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  DINING
                </Link>
              </li>
              <li>
                <Link href="/senses-spa" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  SENSES SPA
                </Link>
              </li>
              <li>
                <Link href="/news-media" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  NEWS/MEDIA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/accommodation" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  ACCOMMODATION
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  WEDDINGS
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  EXPERIENCES
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  LOCATION
                </Link>
              </li>
              <li>
                <Link href="/investor-relations" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  INVESTOR RELATIONS
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/promotions" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  PROMOTIONS
                </Link>
              </li>
              <li>
                <Link href="/meetings" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  MEETINGS
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  FACILITIES
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link href="/outdoor-catering" className="text-md hover:text-gray-300 transition-colors tracking-wide">
                  OUTDOOR CATERING
                </Link>
              </li>
            </ul>
          </div>

        
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mt-6 pt-8 border-gray-800">
          <div className="max-w-md">
            <div className="relative">
              <input
                type="email"
                placeholder="NEWSLETTER SUBSCRIPTION"
                className="w-full bg-white text-black px-6 py-4 pr-12 text-sm tracking-wider placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex gap-6 mb-10">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/terms" className="hover:text-gray-300 transition-colors tracking-wider">
                TERMS & CONDITIONS
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors tracking-wider">
                PRIVACY POLICY
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/sitemap" className="hover:text-gray-300 transition-colors tracking-wider">
                SITEMAP
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="tracking-wide">
                All Copyrights Reserved by ANJANA GUEST - © {new Date().getFullYear()}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;