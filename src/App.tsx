function App() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="text-gray-500 uppercase tracking-[0.3em] mb-4">
            Aspiring <span className="text-blue-400">AI / ML</span> Engineer
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-none">
            Siddhartha
            <br />
            Dhyani
          </h1>

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
      <section className="max-w-5xl mx-auto px-6 py-32">
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
        <section className="max-w-5xl mx-auto px-6 py-32">
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
      </section>
      {/* project dection*/}
      <section className="max-w-5xl mx-auto px-6 py-32">
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
<section className="max-w-5xl mx-auto px-6 py-32">
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
  );
}

export default App;