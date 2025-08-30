import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Header Section */}
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Build Smarter, Faster, and Better
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          A beautiful, responsive landing page built with React and Tailwind CSS.
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          Start Free Trial
        </button>
      </header>

      {/* Popup Form */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Start Your Free Trial</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full border rounded-xl p-2 focus:ring focus:ring-blue-200" />
                <input type="email" placeholder="Email" className="w-full border rounded-xl p-2 focus:ring focus:ring-blue-200" />
                <input type="tel" placeholder="Phone Number" className="w-full border rounded-xl p-2 focus:ring focus:ring-blue-200" />
                <input type="text" placeholder="Class" className="w-full border rounded-xl p-2 focus:ring focus:ring-blue-200" />
                <textarea placeholder="Message" className="w-full border rounded-xl p-2 focus:ring focus:ring-blue-200"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white rounded-xl p-2 hover:bg-blue-700 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
