import { motion } from "framer-motion";
import profile from "../Images/Profile.png";

function Home() {
  return (
    <div className="h-screen text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backIn" }}
      >
        <h1 className="pl-96 text-5xl md:text-6xl font-bold ">
          Hey, I am <span className="text-green-400">Tanish</span><br />
          <span className="text-blue-400">Web Developer</span>
        </h1>

        <motion.div 
          className="pl-96 flex flex-col md:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            { label: "Hire Me", action: "https://in.linkedin.com/in/tanish-tunwal-165b21287" },
            { label: "Resume", action: "#" },
          ].map(({ label, action }) => (
            <motion.a
              key={label}
              href={action}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(0,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-teal-600"
              aria-label={label}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.img
        className="overflow-hidden rounded-full shadow-lg"
        src={profile}
        alt="Tanish Tunwal - Web Developer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
}

export default Home;