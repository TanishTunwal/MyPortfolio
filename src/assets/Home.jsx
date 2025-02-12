import { motion } from "framer-motion";
import profile from "../Images/Profile.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white gap-6 md:gap-12 px-6 sm:px-8 md:px-12">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hey, I am <span className="text-green-400">Tanish</span><br />
          <span className="text-blue-400">Web Developer</span>
        </h1>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            { label: "Hire Me", action: "https://in.linkedin.com/in/tanish-tunwal-165b21287" },
            { label: "Resume", action: "https://drive.google.com/drive/folders/1oZbLqJN1VeWirFwQYglB5ko4E0fctDFE" },
          ].map(({ label, action }) => (
            <motion.a
              key={label}
              href={action}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0,255,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-teal-600"
              aria-label={label}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.img
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-full shadow-lg"
        src={profile}
        alt="Tanish Tunwal - Web Developer"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />  
    </div>
  );
}

export default Home;
