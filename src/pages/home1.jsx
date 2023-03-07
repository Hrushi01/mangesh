import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook, faTwitter } from "@fortawesome/fontawesome-common-types";

const HomePage = ({ setDisplay }) => {
  let values = [
    { name: "Val1", val: "5656", humidity: "222" },
    { name: "Val2", val: "232", humidity: "3322" },
  ];
  return (
    <div className="bg-gray-100 overflow-hidden ">
      <Header setDisplay={setDisplay} />

      <main>
        <section
          id="hero"
          className="bg-green-500 text-white py-20 px-4 md:px-0"
        >
          <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Go Green</h1>
              <p className="text-lg mb-8">
                Monitor the temperature, humidity and soil moisture of your
                plants in real time with our smart greenhouse monitoring system.
              </p>
              <button
                onClick={() => {
                  setDisplay("valu");
                }}
                className="bg-white text-green-500 py-2 px-6 rounded-full hover:bg-green-500 hover:text-white transition duration-300"
              >
                Get Started
              </button>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDisplay("valu");
              }}
              className="bg-white text-green-600 rounded-full px-6 py-3 font-semibold tracking-wide shadow-md"
            >
              Get Started
            </motion.button>
          </div>
        </section>

        {/* Values section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Past Values <span className="italic">(History)</span>
            </h2>
            <motion.div
              className="flex w-full   "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
                {values.map((val, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-center items-center"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Value 1:{val.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600">
                      Value 2:{val.val}
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                      Value 3: {val.humidity}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="mt-28">
        <Footer />
      </div>
      {/* <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={Logo} className="mr-2" />
                <a href="mailto:info@greenhousedetection.com">
                  hrushikesh.ambike@gmail.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91 9359402672</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-white hover:text-green-600 mr-6 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={Logo} className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
