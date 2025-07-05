import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Animated Gradient Background Blur */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.42, 0, 0.58, 1] }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-400 via-sky-200 to-fuchsia-200 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
          className="absolute bottom-[-25%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-fuchsia-200 via-blue-200 to-blue-400 blur-2xl"
        />
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="sr-only">SocialAI Logo</span>
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx={16} cy={16} r={14} className="stroke-blue-400" strokeWidth={2} fill="url(#logoGrad)" />
              <defs>
                <radialGradient id="logoGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </radialGradient>
              </defs>
            </svg>
            <span className="font-extrabold text-lg tracking-tight text-gray-900 select-none">SocialAI</span>
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors duration-200 focus:outline-none focus:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-500 transition-colors duration-200 focus:outline-none focus:text-blue-600">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors duration-200 focus:outline-none focus:text-blue-600">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-500 transition-colors duration-200 focus:outline-none focus:text-blue-600">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors duration-200 focus:outline-none focus:text-blue-600">Contact</a>
            </li>
          </ul>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Open navigation menu"
              tabIndex={0}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu (hidden by default, no JS logic) */}
        <div className="md:hidden">
          <ul className="hidden flex-col px-6 pb-4 gap-4 font-medium">
            <li>
              <a href="#home" className="block py-2 hover:text-blue-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#features" className="block py-2 hover:text-blue-500 transition-colors">Features</a>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-blue-500 transition-colors">About</a>
            </li>
            <li>
              <a href="#testimonials" className="block py-2 hover:text-blue-500 transition-colors">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-blue-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex flex-col justify-center items-center text-center min-h-[70vh] py-20 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent"
          >
            Minimal Social. <br className="hidden md:inline" />
            Maximal Connection.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl mx-auto mb-10 text-lg md:text-xl text-gray-600 font-normal"
          >
            Meet <span className="font-semibold text-blue-500">SocialAI</span> — the minimal social platform where AI enhances your conversations, not your distractions.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            href="#cta"
            className="inline-block px-8 py-3 rounded-full bg-blue-500 text-white font-semibold tracking-wide shadow-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300/80 active:scale-95"
          >
            Get Started
          </motion.a>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 px-4 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight text-gray-900">
              Simple, Smart, Social.
            </h2>
            <p className="text-gray-600 md:text-lg">
              Everything you need for meaningful social connection, nothing you don’t.
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
                  <rect x="6" y="6" width="24" height="24" rx="6" fill="#38bdf8" opacity="0.18" />
                  <path d="M13 18h10M18 13v10" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">AI-Powered Feeds</h3>
              <p className="text-gray-500 text-base">
                See what matters most. Your feed is curated by AI to prioritize authentic, relevant connections.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
                  <circle cx="18" cy="18" r="12" fill="#818cf8" opacity="0.18" />
                  <path d="M13 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0z" stroke="#818cf8" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Minimal Interface</h3>
              <p className="text-gray-500 text-base">
                Decluttered design. Focus on genuine interactions, not endless scrolling or ads.
              </p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
                  <rect x="9" y="9" width="18" height="18" rx="4" fill="#f472b6" opacity="0.18" />
                  <path d="M13 23l10-10M23 23l-10-10" stroke="#f472b6" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Privacy by Design</h3>
              <p className="text-gray-500 text-base">
                Your data belongs to you. Built-in privacy controls and zero invasive tracking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 bg-gray-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 md:text-lg mb-2">
              SocialAI is built for people who value connection over noise—minimalism meets intelligent technology.
            </p>
            <p className="text-gray-500 md:text-base">
              We believe great conversations shouldn’t be lost in distractions. Our AI enhances your experience quietly in the background, so you stay focused on what truly matters: your friends, your stories, your community.
            </p>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 px-4 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">Loved by Minimalists</h2>
            <p className="text-gray-600 md:text-lg">
              Here’s what our users say about SocialAI:
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center"
            >
              <div className="mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-800 text-base mb-3">&quot;Finally, a social platform that doesn’t feel overwhelming. The interface is so clean and the AI suggestions are spot on!&quot;</p>
              <span className="text-sm text-gray-500 font-medium">Alex T.</span>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.42, 0, 0.58, 1] }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center"
            >
              <div className="mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 2"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-800 text-base mb-3">&quot;I love how SocialAI puts privacy at the forefront. My feed feels personal, not algorithmically manipulative.&quot;</p>
              <span className="text-sm text-gray-500 font-medium">Morgan S.</span>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.42, 0, 0.58, 1] }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center"
            >
              <div className="mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="User 3"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-800 text-base mb-3">&quot;Minimal, beautiful, and smart. SocialAI helps me connect with friends without all the noise.&quot;</p>
              <span className="text-sm text-gray-500 font-medium">Jamie L.</span>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          id="cta"
          className="py-16 px-4 bg-gradient-to-r from-blue-50 via-fuchsia-50 to-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">
              Join the Next-Gen Social Community
            </h2>
            <p className="text-gray-600 md:text-lg mb-7">
              Sign up in seconds. Experience the future of social, today.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-blue-500 text-white font-semibold tracking-wide shadow-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300/80 active:scale-95"
            >
              Request Early Access
            </a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-4 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-600 md:text-lg">
              Questions? Feedback? We’re here to help you make the most of SocialAI.
            </p>
          </motion.div>
          {/* Minimal Contact Form */}
          <form className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-sm p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 text-left">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 text-left">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="How can we help?"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300/80 active:scale-95"
            >
              Send Message
            </button>
          </form>
          {/* Alt Contact */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Or email us at{' '}
            <a href="mailto:hello@socialai.com" className="text-blue-500 underline hover:text-blue-600 transition-colors">
              hello@socialai.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <svg width={28} height={28} viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx={16} cy={16} r={14} className="stroke-blue-400" strokeWidth={2} fill="url(#footerLogoGrad)" />
              <defs>
                <radialGradient id="footerLogoGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </radialGradient>
              </defs>
            </svg>
            <span className="font-extrabold text-lg tracking-tight text-gray-900 select-none">SocialAI</span>
            <span className="ml-4 text-gray-400 text-sm">&copy; {new Date().getFullYear()} SocialAI. All rights reserved.</span>
          </div>
          {/* Quick Links */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#features" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Features</a>
            <a href="#about" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">About</a>
            <a href="#contact" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Contact</a>
            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
                  <path d="M18 5.3a7.1 7.1 0 0 1-2 .6 3.5 3.5 0 0 0 1.5-2 7.1 7.1 0 0 1-2.2.8A3.5 3.5 0 0 0 10 9.5v.8A10 10 0 0 1 3 4s-4 9 5 13a10.7 10.7 0 0 1-6 2c9 5 20 0 20-11.5a7 7 0 0 0-.1-1.2A5 5 0 0 0 20 4.6a7 7 0 0 1-2 .6z" fill="#60a5fa" opacity="0.7"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
                <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
                  <path d="M17 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-6h-2v-2h2V8.5A2.5 2.5 0 0 1 12.5 6h2.5v2h-2.5a.5.5 0 0 0-.5.5V9h3l-.5 2h-2.5v6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" fill="#818cf8" opacity="0.7"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
                  <rect x="3" y="3" width="14" height="14" rx="4" fill="#f472b6" opacity="0.12"/>
                  <path d="M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM14.5 5.5h.01" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="10" cy="10" r="3.6" stroke="#f472b6" strokeWidth="1.2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;