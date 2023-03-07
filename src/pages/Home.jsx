import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500">
        <nav className="container mx-auto">
          <ul className="flex justify-between items-center py-4">
            <li>
              <a href="#about" className="text-white font-medium">
                About Us Manges
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white font-medium">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#live" className="text-white font-medium">
                Check Values Live
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section id="about">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-lg">
            Our Smart Greenhouse monitoring and control system helps you keep
            track of the humidity, temperature, light intensity, and soil
            moisture of your plants. With our system, you can ensure that your
            plants are healthy and thriving.
          </p>
        </section>

        <section id="contact" className="mt-8">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <form>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 mb-4 border rounded-md"
            />

            <label htmlFor="email" className="block mb-2 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 mb-4 border rounded-md"
            />

            <label htmlFor="message" className="block mb-2 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 mb-4 border rounded-md"
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Send
            </button>
          </form>
        </section>

        <section id="live" className="mt-8">
          <h1 className="text-3xl font-semibold mb-4">Check Values Live</h1>
          <p className="text-lg">
            Here you can view the current values of the Smart Greenhouse
            monitoring and control system:
          </p>
          {/* Add code here to display the live values */}
        </section>
      </main>

      <footer className="bg-green-500 text-white py-4">
        <p className="text-center">
          &copy; 2023 Smart Greenhouse Monitoring and Control System. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
