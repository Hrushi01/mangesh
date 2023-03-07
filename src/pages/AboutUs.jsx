import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Green from "../assets/green.jpg";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mangesh from "../assets/apj.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = ({ setDisplay }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header setDisplay={setDisplay} />

      {/* Main */}
      <main className="flex-grow bg-gray-100">
        {/* Hero section */}
        <section className="bg-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight font-serif">
                    About Us
                  </h2>
                  <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Agriculture is the spine of India’s economic activity.
                    However, traditional farming methods have fallen behind in
                    modern technology. That's why we created Green House
                    Detection - a smart monitoring system for greenhouses that
                    improves productivity and profitability.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <img
                    src={Green}
                    alt="Green House Detection team"
                    className="w-48 h-48 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                className=" w-full  "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9 }}
              >
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight font-serif">
                  Our Values
                </h2>
                <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl italic">
                  "At Green House Detection, we believe in the power of
                  technology to improve agriculture. Our values reflect our
                  commitment to making a difference in the world."
                </p>
              </motion.div>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace the latest technologies to continuously improve our
                  products and services.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h3 className="text-xl font-bold mb-2">Raspberry Pi</h3>
                <p className="text-gray-700">
                  We embrace the latest technologies to continuously improve our
                  products and services.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9 }}
              >
                <h3 className="text-xl font-bold mb-2">Humidity Detection</h3>
                <p className="text-gray-700">
                  We embrace the latest technologies to continuously improve our
                  products and services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight font-serif">
                  About Us
                </h2>
                <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Agriculture is the backbone of India's economy, but
                  traditional farming methods often fall behind in implementing
                  modern technologies. Our mission is to improve the
                  productivity and profitability of major farming systems by
                  introducing smart greenhouse monitoring and control systems.
                </p>
                <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A greenhouse provides a climate-controlled environment for
                  plants to grow year-round, even on cold and cloudy days.
                  However, most greenhouse systems still use manual monitoring
                  systems for temperature and humidity, which can cause
                  discomfort for workers and affect plant yield. That's where
                  our IoT-powered monitoring system comes in.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-8">
                {/* Image goes here */}
                <div className="h-full rounded-md overflow-hidden shadow-lg">
                  <motion.img
                    src={Green}
                    alt="About Us"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Team member */}
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={Mangesh}
                    alt="Team member 1"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Mangesh Shinde</h3>
                  <p className="text-gray-700 mb-2">CEO</p>
                  <div className="flex items-center">
                    <div className="text-green-600 hover:text-green-700 mr-4">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <button
                      href="tel:+123456789"
                      className="text-green-600 hover:text-green-700"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                    </button>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={Mangesh}
                    alt="Team member 1"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Onkar Chougale</h3>
                  <p className="text-gray-700 mb-2">CFO</p>
                  <div className="flex items-center">
                    <button className="text-green-600 hover:text-green-700 mr-4">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <button className="text-green-600 hover:text-green-700">
                      <FontAwesomeIcon icon={faPhone} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={Mangesh}
                    alt="Team member 1"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2"> Sanket Rajgude</h3>
                  <p className="text-gray-700 mb-2">Team</p>
                  <div className="flex items-center">
                    <button className="text-green-600 hover:text-green-700 mr-4">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <button className="text-green-600 hover:text-green-700">
                      <FontAwesomeIcon icon={faPhone} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AboutUsPage;
