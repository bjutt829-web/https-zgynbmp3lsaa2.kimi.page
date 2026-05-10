import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  shop: [
    { path: '/products', label: 'All Collections' },
    { path: '/products?category=oud', label: 'Oud Collection' },
    { path: '/products?category=musk', label: 'Musk Collection' },
    { path: '/products?category=amber', label: 'Amber Collection' },
  ],
  company: [
    { path: '/about', label: 'Our Story' },
    { path: '/blog', label: 'Journal' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ],
  help: [
    { path: '/contact', label: 'Customer Service' },
    { path: '/contact', label: 'Shipping & Returns' },
    { path: '/contact', label: 'Store Locator' },
    { path: '/contact', label: 'Gift Cards' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050A08] border-t border-[#CBB26A]/20">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-4xl text-[#CBB26A]">RUYA</span>
            </Link>
            <p className="mt-4 text-sm text-[#F8F6F0]/60 leading-relaxed max-w-xs">
              A luxury fragrance boutique rooted in Lahore, Pakistan. We curate
              the finest Ouds, Ambers, Musks, and French Parfums for the
              discerning connoisseur.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#F8F6F0]/60">
                <MapPin size={16} className="text-[#CBB26A] flex-shrink-0" />
                <span>12-A MM Alam Road, Gulberg III, Lahore</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F8F6F0]/60">
                <Phone size={16} className="text-[#CBB26A] flex-shrink-0" />
                <span>+92 42 3576 2890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F8F6F0]/60">
                <Mail size={16} className="text-[#CBB26A] flex-shrink-0" />
                <span>hello@ruyafragrances.pk</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-display text-lg text-[#F8F6F0] mb-5">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#F8F6F0]/50 hover:text-[#CBB26A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-[#F8F6F0] mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#F8F6F0]/50 hover:text-[#CBB26A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-[#F8F6F0] mb-5">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#F8F6F0]/50 hover:text-[#CBB26A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#CBB26A]/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F8F6F0]/40">
            &copy; {new Date().getFullYear()} RUYA Fragrances. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F8F6F0]/50 hover:text-[#CBB26A] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F8F6F0]/50 hover:text-[#CBB26A] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
