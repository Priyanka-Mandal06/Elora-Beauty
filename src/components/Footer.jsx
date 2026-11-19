import { useState } from 'react';
import { SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import { ArrowRight } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Handle newsletter form submission.
  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#352B29] px-5 pb-8 pt-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main footer sections. */}
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand information. */}
          <div>
            <a href="#home" className="font-serif text-3xl tracking-[0.15em]">
              ELORA<span className="text-[#D9A49D]">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Celebrating natural beauty through thoughtfully curated skincare and beauty
              essentials.
            </p>

            {/* Social media links. */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#B77C78]"
              >
                <SiInstagram size={22} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#B77C78]"
              >
                <SiFacebook size={22} />
              </a>
            </div>
          </div>

          {/* Shopping navigation links. */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.2em] text-[#D9A49D]">SHOP</h3>

            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <a href="#categories" className="hover:text-white">
                  Skincare
                </a>
              </li>

              <li>
                <a href="#categories" className="hover:text-white">
                  Makeup
                </a>
              </li>

              <li>
                <a href="#categories" className="hover:text-white">
                  Haircare
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-white">
                  Bestsellers
                </a>
              </li>
            </ul>
          </div>

          {/* Customer service information. */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.2em] text-[#D9A49D]">CUSTOMER CARE</h3>

            <ul className="space-y-4 text-sm text-white/65">
              <li>Contact Us</li>
              <li>Shipping Information</li>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter subscription. */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.2em] text-[#D9A49D]">STAY IN THE GLOW</h3>

            <p className="mb-5 text-sm leading-6 text-white/60">
              Subscribe to our newsletter for beauty tips, updates and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="flex border-b border-white/40 pb-3">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                required
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="transition hover:text-[#D9A49D]"
              >
                <ArrowRight size={20} />
              </button>
            </form>

            {subscribed && (
              <p className="mt-3 text-xs text-[#D9A49D]" role="status">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Copyright information. */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-white/45 md:flex-row">
          <p>© 2026 ELORA BEAUTY. All rights reserved.</p>

          <p>Made with love for your everyday beauty.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
