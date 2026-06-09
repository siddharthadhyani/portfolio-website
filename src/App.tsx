import { motion } from "framer-motion";


function App() {
  return (
  <>
   <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">
      Siddhartha
    </h1>

    <div className="flex gap-6 text-sm">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
    

    <main className="bg-black text-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="font-bold text-lg">
      Siddhartha
    </h1>

    <div className="flex gap-6 text-sm">
      <a href="#about" className="hover:text-blue-400 transition">
        About
      </a>

      <a href="#skills" className="hover:text-blue-400 transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-blue-400 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>
    </div>

  </div>
</nav>
   
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="text-gray-500 uppercase tracking-[0.3em] mb-4">
            Aspiring <span className="text-blue-400">AI / ML</span> Engineer
          </p>

          <motion.h1
  className="text-6xl md:text-8xl font-bold leading-none"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Siddhartha
  <br />
  Dhyani
</motion.h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            BTech CSE Student building intelligent systems, learning machine
            learning, and creating software that solves real-world problems.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-700 rounded-xl hover:border-white transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
id="about"
className="max-w-5xl mx-auto px-6 py-32"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}>

        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          I'm Siddhartha Dhyani, a BTech Computer Science student at Lovely
          Professional University. Currently, I'm focused on strengthening my
          foundations in programming, machine learning, and software
          development.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mt-6">
          My goal is to become an AI/ML engineer by building real projects,
          mastering problem-solving, and continuously learning modern
          technologies that can create meaningful impact.
        </p>
        <section
id="skills"
className="max-w-5xl mx-auto px-6 py-32"
>
  <h2 className="text-4xl font-bold mb-12">Skills</h2>
{/* skill Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      "Python",
      "C++",
      "Machine Learning",
      "Git",
      "GitHub",
      "SQL",
      "HTML",
      "CSS",
    ].map((skill) => (
      <div
        key={skill}
        className="border border-white/10 rounded-xl p-4 text-center hover:border-blue-500 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>
      </motion.section>
      {/* project dection*/}
      <section
id="projects"
className="max-w-5xl mx-auto px-6 py-32"
>
  <h2 className="text-4xl font-bold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-2">
        AI Resume Analyzer
      </h3>

      <p className="text-gray-400 mb-4">
        Analyze resumes using machine learning and NLP techniques.
      </p>

      <div className="flex gap-2 flex-wrap">
        <span className="border px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="border px-3 py-1 rounded-full text-sm">
          Machine Learning
        </span>

        <span className="border px-3 py-1 rounded-full text-sm">
          NLP
        </span>
      </div>
    </div>

    <div className="border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-2">
        Portfolio Website
      </h3>

      <p className="text-gray-400 mb-4">
        Personal portfolio built using React, TypeScript and Tailwind CSS.
      </p>

      <div className="flex gap-2 flex-wrap">
        <span className="border px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="border px-3 py-1 rounded-full text-sm">
          TypeScript
        </span>

        <span className="border px-3 py-1 rounded-full text-sm">
          Tailwind
        </span>
      </div>
    </div>

  </div>
</section>


<section className="max-w-5xl mx-auto px-6 py-32">
  <h2 className="text-4xl font-bold mb-12">Education</h2>

  <div className="border border-white/10 rounded-2xl p-8">
    <h3 className="text-2xl font-semibold">
      Lovely Professional University
    </h3>

    <p className="text-gray-400 mt-2">
      Bachelor of Technology (BTech) in Computer Science Engineering
    </p>

    <p className="text-gray-500 mt-2">
      2025 – 2029
    </p>
  </div>
</section>
<section
id="contact"
className="max-w-5xl mx-auto px-6 py-32"
>
  <h2 className="text-4xl font-bold mb-12">Contact</h2>

  <div className="space-y-4 text-lg">
    <p>
      Email: siddhartha.dhyani.dev@gmail.com
    </p>

    <p>
  GitHub:{" "}
  <a
    href="https://github.com/siddharthadhyani"
    target="_blank"
    className="text-blue-400 hover:underline"
  >
    View GitHub
  </a>
</p>

    <p>
  LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/siddhartha-dhyani-6b0a65384"
    target="_blank"
    className="text-blue-400 hover:underline"
  >
    View Profile
  </a>
</p>
  </div>
</section>
    </main>
</>

  );
}

export default App;