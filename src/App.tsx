import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="flex items-center text-2xl font-bold tracking-tight text-blue-600 select-none">
              {/* Simple bird logo SVG */}
              <svg
                className="w-8 h-8 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="M6 19c4 1 8-2 10-6 5 5 10 2 10 2s-4 7-13 11c-2-1-7-4-7-8 0-2 2-2 2-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="11.5" cy="13.5" r="1" fill="currentColor" />
              </svg>
              UK Birds
            </span>
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <a href="#home" className="transition text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="transition text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="transition text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="transition text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="transition text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              tabIndex={-1}
              aria-label="Open main menu"
              type="button"
            >
              {/* Hamburger icon (no toggle logic, just for style) */}
              <svg className="block h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Nav (Always hidden, no toggle logic) */}
        <div className="md:hidden hidden">
          <ul className="px-4 pb-4 space-y-2">
            <li>
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 focus:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 focus:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 focus:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600 focus:text-blue-600">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 focus:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex flex-col items-center justify-center px-4 py-20 sm:py-28 bg-gray-50"
        >
          {/* Animated Bird Background, subtly pulsing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.42, 0, 0.58, 1] }}
            className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center"
            aria-hidden="true"
          >
            <motion.svg
              className="w-64 h-64 sm:w-96 sm:h-96 opacity-10"
              viewBox="0 0 256 256"
              fill="none"
              initial={{ scale: 0.93 }}
              animate={{ scale: [0.93, 1.02, 0.93] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <ellipse cx="128" cy="128" rx="120" ry="85" fill="#93c5fd" />
            </motion.svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Discover Every Bird Species in the UK
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Explore a comprehensive, beautifully curated gallery of UK birds. Browse hundreds of species with stunning images and in-depth information. Search, learn, and get closer to nature—right from your screen.
            </p>
            {/* CTA Button */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 18 }}
              className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:bg-blue-700 transition"
            >
              Explore the Birds
            </motion.a>
          </motion.div>
          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="relative z-10 mt-10 w-full max-w-xl mx-auto"
            autoComplete="off"
            onSubmit={e => e.preventDefault()}
          >
            <label htmlFor="bird-search" className="sr-only">
              Search for a UK bird species
            </label>
            <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                id="bird-search"
                name="bird-search"
                type="search"
                placeholder="Search for a bird species..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 placeholder-gray-400"
                disabled
              />
            </div>
            <span className="block mt-2 text-xs text-gray-400 text-left pl-2">
              (Search coming soon!)
            </span>
          </motion.form>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 sm:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900"
            >
              Why Choose UK Birds Gallery?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gray-50 rounded-xl shadow p-7 flex flex-col items-center"
              >
                <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 32 32">
                  <path d="M6 19c4 1 8-2 10-6 5 5 10 2 10 2s-4 7-13 11c-2-1-7-4-7-8 0-2 2-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11.5" cy="13.5" r="1" fill="currentColor" />
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Extensive Bird Gallery</h3>
                <p className="text-gray-600 text-center">
                  Browse high-quality images and profiles for every bird species found in the UK, from the resplendent Kingfisher to the elusive Nightjar.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gray-50 rounded-xl shadow p-7 flex flex-col items-center"
              >
                <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="12" />
                  <path d="M16 8v8l5 3" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Educational Insights</h3>
                <p className="text-gray-600 text-center">
                  Learn about bird habitats, calls, migration patterns, and fun facts to deepen your appreciation and knowledge of UK avifauna.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gray-50 rounded-xl shadow p-7 flex flex-col items-center"
              >
                <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 32 32">
                  <rect x="5" y="10" width="22" height="12" rx="6" />
                  <circle cx="16" cy="16" r="4" />
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Modern, Easy Search</h3>
                <p className="text-gray-600 text-center">
                  Quickly find any UK bird by name or type. Our intelligent search (coming soon) makes discovering new species effortless.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bird Gallery Section */}
        <section
          id="gallery"
          className="py-20 sm:py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900"
            >
              Iconic UK Birds Gallery
            </motion.h2>
            {/* Responsive grid of bird images (placeholder images with names) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "European Robin", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
                { name: "Blue Tit", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
                { name: "Blackbird", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80" },
                { name: "Eurasian Wren", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" },
                { name: "Barn Owl", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
                { name: "Mute Swan", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" },
                { name: "Kingfisher", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80" },
                { name: "Goldfinch", img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80" },
                { name: "Great Spotted Woodpecker", img: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80" },
                { name: "Song Thrush", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
                { name: "Common Starling", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3f07?auto=format&fit=crop&w=400&q=80" },
                { name: "Puffin", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80" },
              ].map((bird, idx) => (
                <motion.div
                  key={bird.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6 + idx * 0.04,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group w-full aspect-[1/1] rounded-xl overflow-hidden shadow border border-gray-200 bg-white">
                    <img
                      src={bird.img}
                      alt={bird.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                    {bird.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-gray-400">
              Dozens more species coming soon!
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 sm:py-24 bg-white"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
            >
              UK Birds is a passion project by bird enthusiasts, for bird enthusiasts. Our aim is to inspire a love of nature and connect people with the remarkable diversity of avian life in Britain. Whether you&rsquo;re a seasoned birder, a student, or simply curious, we provide an accessible resource for learning, discovery, and appreciation of every feathered friend found on these isles.
            </motion.p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 sm:py-24 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900"
            >
              What Our Users Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-xl shadow p-7 flex flex-col items-center"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User Alice"
                  className="w-16 h-16 rounded-full object-cover mb-4 border border-gray-200"
                  loading="lazy"
                />
                <p className="italic text-gray-700 mb-3 text-center">
                  &ldquo;Absolutely stunning bird photos! I learned more in a week than I did in years of casual birdwatching.&rdquo;
                </p>
                <div className="font-bold text-blue-600">Alice Bennett</div>
                <div className="text-xs text-gray-400">Wildlife Photographer</div>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-xl shadow p-7 flex flex-col items-center"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/51.jpg"
                  alt="User Tom"
                  className="w-16 h-16 rounded-full object-cover mb-4 border border-gray-200"
                  loading="lazy"
                />
                <p className="italic text-gray-700 mb-3 text-center">
                  &ldquo;The best resource for UK birds on the web. My kids love looking up birds we spot in our garden.&rdquo;
                </p>
                <div className="font-bold text-blue-600">Tom Hughes</div>
                <div className="text-xs text-gray-400">Parent & Birdwatcher</div>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.66, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-xl shadow p-7 flex flex-col items-center"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Dr. Singh"
                  className="w-16 h-16 rounded-full object-cover mb-4 border border-gray-200"
                  loading="lazy"
                />
                <p className="italic text-gray-700 mb-3 text-center">
                  &ldquo;Incredibly detailed and well-presented. A fantastic site for amateur and expert ornithologists alike.&rdquo;
                </p>
                <div className="font-bold text-blue-600">Dr. Ravi Singh</div>
                <div className="text-xs text-gray-400">Ecologist</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-20 sm:py-24 bg-white"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900"
            >
              Ready to Explore UK Birdlife?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-gray-700 mb-8"
            >
              Start your journey today. Delve into the beauty and diversity of Britain&rsquo;s birds and become part of a growing community of nature lovers.
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 18 }}
              className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:bg-blue-700 transition"
            >
              Get In Touch
            </motion.a>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 sm:py-24 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900"
            >
              Contact Us
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto"
              autoComplete="off"
              onSubmit={e => e.preventDefault()}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-gray-900"
                  placeholder="Your Name"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-gray-900"
                  placeholder="your@email.com"
                  disabled
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-gray-900"
                  placeholder="Type your message here..."
                  disabled
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:bg-blue-700 transition cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
              <div className="mt-2 text-center text-xs text-gray-400">
                Please email us at <a href="mailto:info@ukbirds.example.com" className="underline text-blue-600 hover:text-blue-800">info@ukbirds.example.com</a>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <span className="flex items-center text-lg font-bold tracking-tight text-blue-600">
              <svg
                className="w-7 h-7 mr-1 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="M6 19c4 1 8-2 10-6 5 5 10 2 10 2s-4 7-13 11c-2-1-7-4-7-8 0-2 2-2 2-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="11.5" cy="13.5" r="1" fill="currentColor" />
              </svg>
              UK Birds
            </span>
            <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
          <div className="flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Features
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Gallery
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition text-sm">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Contact
            </a>
          </div>
          <div className="flex space-x-5">
            {/* Socials: placeholder SVGs */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 7.2c.02.27.02.55.02.82 0 8.38-6.38 18.05-18.05 18.05-3.59 0-6.94-1.03-9.76-2.81.5.06 1.01.09 1.54.09 2.98 0 5.72-1.02 7.9-2.74a6.36 6.36 0 0 1-5.94-4.42c.38.07.77.12 1.18.12.56 0 1.12-.07 1.64-.21a6.34 6.34 0 0 1-5.09-6.22v-.08c.85.47 1.82.75 2.85.78A6.34 6.34 0 0 1 1.5 3.14c0-1.17.32-2.26.88-3.2a18 18 0 0 0 13.03 6.6c-.11-.47-.17-.96-.17-1.46A6.34 6.34 0 0 1 18.29 0a12.66 12.66 0 0 0 4.03-1.54 6.28 6.28 0 0 1-2.78 3.47A12.7 12.7 0 0 0 24 2.29a13.01 13.01 0 0 1-3.5 3.6z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.2" />
                <path d="M16.8 2H7.2C4.3 2 2 4.3 2 7.2v9.6C2 19.7 4.3 22 7.2 22h9.6c2.9 0 5.2-2.3 5.2-5.2V7.2C22 4.3 19.7 2 16.8 2zm3.2 14.8c0 1.8-1.4 3.2-3.2 3.2H7.2c-1.8 0-3.2-1.4-3.2-3.2V7.2c0-1.8 1.4-3.2 3.2-3.2h9.6c1.8 0 3.2 1.4 3.2 3.2v9.6z"/>
                <circle cx="17.5" cy="6.5" r="1.2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;