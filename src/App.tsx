import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="flex w-8 h-8 rounded-full bg-yellow-400 items-center justify-center font-bold text-white text-lg shadow">
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="w-6 h-6">
                <ellipse cx="14" cy="14" rx="11" ry="10" fill="#fff4b8" />
                <circle cx="14" cy="13" r="5" fill="#fbbf24" />
                <ellipse cx="9.5" cy="10.5" rx="1.2" ry="1.7" fill="#fff" />
                <ellipse cx="18.5" cy="10.5" rx="1.2" ry="1.7" fill="#fff" />
              </svg>
            </span>
            <span className="font-bold text-xl text-yellow-500 tracking-tight select-none">Paws On The Go</span>
          </a>
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition-colors focus-visible:outline-yellow-400">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-500 transition-colors focus-visible:outline-yellow-400">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition-colors focus-visible:outline-yellow-400">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-yellow-500 transition-colors focus-visible:outline-yellow-400">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition-colors focus-visible:outline-yellow-400">Contact</a>
            </li>
          </ul>
          {/* Hamburger - no JS */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              tabIndex={0}
            >
              <span className="block w-6 h-0.5 bg-gray-700 mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section
          id="home"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white pb-12 pt-8"
        >
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-4 md:px-0">
            {/* Text */}
            <div className="flex-1 flex flex-col items-start md:items-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
              >
                Happy Paws, Happy Days!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
                className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg"
              >
                Trusted dog walking & sitting services for busy pet owners in your neighborhood. Flexible plans, friendly faces, wagging tails!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className="flex gap-4"
              >
                <a
                  href="#features"
                  className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow transition-colors focus-visible:outline-yellow-400"
                >
                  View Plans
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-500 hover:bg-yellow-50 font-semibold transition-colors focus-visible:outline-yellow-400"
                >
                  Book a Walk
                </a>
              </motion.div>
            </div>
            {/* Hero Dog Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className="flex-1 flex items-center justify-center"
            >
              <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square">
                {/* Main Dog Photo */}
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=500&q=80"
                  alt="Happy dog"
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                  loading="eager"
                />
                {/* Side Dogs */}
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=300&q=80"
                  alt="Dog 2"
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=300&q=80"
                  alt="Dog 3"
                  className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=facearea&w=300&q=80"
                  alt="Dog 4"
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full object-cover border-4 border-white shadow"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES / FEATURES */}
        <section
          id="features"
          className="bg-gray-50 py-16 px-4"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
            >
              Our Services & Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto"
            >
              Whether your pup needs a brisk walk or a cozy sitter, we've got flexible plans to fit every paw's needs.
            </motion.p>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Walk Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=facearea&w=400&q=80"
                  alt="Dog on a walk"
                  className="w-20 h-20 rounded-full object-cover shadow mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dog Walking</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Fun, safe, and energetic walks for your dog in your local area. Choose your preferred duration.
                </p>
                <ul className="mb-4 text-gray-700 text-sm space-y-1">
                  <li>
                    <span className="font-medium">30 min:</span> $18/walk
                  </li>
                  <li>
                    <span className="font-medium">60 min:</span> $29/walk
                  </li>
                  <li>
                    <span className="font-medium">Multi-walk discounts</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-auto px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow-sm transition-colors focus-visible:outline-yellow-400"
                >
                  Book a Walk
                </a>
              </motion.div>
              {/* Dog Sitting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=400&q=80"
                  alt="Dog sitting"
                  className="w-20 h-20 rounded-full object-cover shadow mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dog Sitting</h3>
                <p className="text-gray-600 mb-4 text-center">
                  In-home sitting or drop-in visits for feeding, playtime, and cuddles while you’re away.
                </p>
                <ul className="mb-4 text-gray-700 text-sm space-y-1">
                  <li>
                    <span className="font-medium">Per Visit:</span> $25/visit (45 min)
                  </li>
                  <li>
                    <span className="font-medium">Half Day:</span> $45 (4 hrs)
                  </li>
                  <li>
                    <span className="font-medium">Overnight:</span> $70
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-auto px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow-sm transition-colors focus-visible:outline-yellow-400"
                >
                  Book Sitting
                </a>
              </motion.div>
              {/* Custom Plans */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80"
                  alt="Happy dog"
                  className="w-20 h-20 rounded-full object-cover shadow mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Custom Care</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Have something special in mind? We offer tailored plans for puppies, seniors, or multiple dogs.
                </p>
                <ul className="mb-4 text-gray-700 text-sm space-y-1">
                  <li>
                    <span className="font-medium">Flexible Pricing</span>
                  </li>
                  <li>
                    <span className="font-medium">Multi-dog &amp; recurring packages</span>
                  </li>
                  <li>
                    <span className="font-medium">Meet &amp; Greet available</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-auto px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow-sm transition-colors focus-visible:outline-yellow-400"
                >
                  Ask Us!
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          className="bg-white py-16 px-4"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-5 max-w-xl">
                Paws On The Go is a team of lifelong dog lovers dedicated to keeping your furry friends happy, healthy, and safe. We’re fully insured, background-checked, and trained in canine first aid. Our mission is to bring peace of mind and joy to busy pet parents, one tail wag at a time.
              </p>
              <div className="flex items-center gap-5 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=100&q=80"
                  alt="About us dog"
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-200"
                  loading="lazy"
                />
                <span className="text-base text-gray-600">Locally owned &amp; operated</span>
              </div>
            </motion.div>
            {/* About Photo Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.95, ease: [0.42, 0, 0.58, 1] }}
              className="flex-1 flex justify-center"
            >
              <div className="grid grid-cols-2 gap-4 w-64 md:w-80">
                <img
                  src="https://images.unsplash.com/photo-1465101178521-c1a9136a03f6?auto=format&fit=facearea&w=250&q=80"
                  alt="Dog playing"
                  className="rounded-lg object-cover h-28 w-full shadow"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=facearea&w=250&q=80"
                  alt="Dog in grass"
                  className="rounded-lg object-cover h-40 w-full shadow"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=250&q=80"
                  alt="Dog smiling"
                  className="rounded-lg object-cover h-40 w-full shadow"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=250&q=80"
                  alt="Dog looking up"
                  className="rounded-lg object-cover h-28 w-full shadow"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="bg-gray-50 py-16 px-4"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10"
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl shadow border border-gray-100 p-7 flex flex-col items-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=facearea&w=100&q=80"
                  alt="Owner and dog"
                  className="w-14 h-14 rounded-full object-cover mb-3 border-2 border-yellow-200"
                  loading="lazy"
                />
                <p className="text-gray-700 text-base mb-3 text-center">
                  “My dog Max absolutely loves his walks with Paws On The Go! They’re reliable, caring, and always send me cute photos.”
                </p>
                <span className="text-sm text-gray-500 font-semibold">– Sarah B.</span>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl shadow border border-gray-100 p-7 flex flex-col items-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&q=80"
                  alt="Owner and dog"
                  className="w-14 h-14 rounded-full object-cover mb-3 border-2 border-yellow-200"
                  loading="lazy"
                />
                <p className="text-gray-700 text-base mb-3 text-center">
                  “The sitters are so friendly and attentive! I always feel at ease leaving Luna in their care. Highly recommend!”
                </p>
                <span className="text-sm text-gray-500 font-semibold">– Mike R.</span>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl shadow border border-gray-100 p-7 flex flex-col items-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=100&q=80"
                  alt="Owner and dog"
                  className="w-14 h-14 rounded-full object-cover mb-3 border-2 border-yellow-200"
                  loading="lazy"
                />
                <p className="text-gray-700 text-base mb-3 text-center">
                  “Flexible scheduling and a real passion for dogs. Our family recommends them to everyone in the neighborhood!”
                </p>
                <span className="text-sm text-gray-500 font-semibold">– Priya D.</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="bg-white py-16 px-4"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Ready for Wagging Tails?
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-lg">
                Book your dog’s next walk or sitting today. It’s quick, easy, and your pup will love you for it!
              </p>
              <a
                href="#contact"
                className="inline-block px-7 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow transition-colors focus-visible:outline-yellow-400"
              >
                Get Started
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.85, ease: [0.42, 0, 0.58, 1] }}
              className="flex-1 flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1465101178521-c1a9136a03f6?auto=format&fit=facearea&w=350&q=80"
                alt="Dog running"
                className="rounded-2xl shadow-lg object-cover w-60 h-60 md:w-80 md:h-80"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-gray-50 py-16 px-4"
        >
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="text-lg text-gray-600 mb-10 text-center"
            >
              Have a question or want to book a service? Fill out the form below or reach us directly. We'll get back to you soon!
            </motion.p>
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="border border-gray-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="border border-gray-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-gray-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow transition-colors focus-visible:outline-yellow-400"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {/* Contact Details */}
              <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                    <path d="M17 2.5 10 9.5 3 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  hello@pawsonthego.com
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                    <path d="M3 6.75a13.5 13.5 0 0012 0M9 13.5v1.5m0-1.5a6 6 0 110-12 6 6 0 010 12z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                    <path d="M3.5 7.5V15a1.5 1.5 0 001.5 1.5h8a1.5 1.5 0 001.5-1.5V7.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10.5v2.5M10.5 10.5v2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 7.5h13" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 7.5V5a3.5 3.5 0 017 0v2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  123 Bark Lane, Dogtown
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="flex w-8 h-8 rounded-full bg-yellow-400 items-center justify-center font-bold text-white text-lg shadow">
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="w-6 h-6">
                <ellipse cx="14" cy="14" rx="11" ry="10" fill="#fff4b8" />
                <circle cx="14" cy="13" r="5" fill="#fbbf24" />
                <ellipse cx="9.5" cy="10.5" rx="1.2" ry="1.7" fill="#fff" />
                <ellipse cx="18.5" cy="10.5" rx="1.2" ry="1.7" fill="#fff" />
              </svg>
            </span>
            <span className="font-bold text-xl text-yellow-500 tracking-tight select-none">Paws On The Go</span>
          </div>
          {/* Quick Links */}
          <ul className="flex gap-6 text-sm text-gray-600 font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-500 transition-colors">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
            </li>
          </ul>
          {/* Socials */}
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              tabIndex={0}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              tabIndex={0}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                <path d="M16 8h-2a2 2 0 00-2 2v2h4v3h-4v5h-3v-5H7v-3h3v-2a5 5 0 015-5h2z" strokeWidth="2"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              tabIndex={0}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                <path d="M8 19c11 0 13-8 13-13v-.5A9.34 9.34 0 0022 3s-1 .5-2 .5a4.48 4.48 0 00-7.86 4.09C7.37 7.36 4.82 5.8 3.06 3.7c-.4.7-.62 1.53-.62 2.41 0 1.67.85 3.15 2.14 4.01-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.27 3.88 4.71-.4.1-.81.15-1.24.15-.3 0-.6-.03-.89-.09.6 1.84 2.38 3.19 4.48 3.23A9.14 9.14 0 012 18.29c-.63 0-1.24-.04-1.84-.11A12.94 12.94 0 008 19z" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Paws On The Go. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;