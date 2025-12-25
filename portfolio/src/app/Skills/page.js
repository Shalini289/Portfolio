const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Frontend */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
             Web Development
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>Express.js</li>
             
            </ul>
          </div>

          {/* Programming */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Programming
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>C/C++</li>
              <li>Data Structures & Algorithms</li>
              <li>Problem Solving</li>
              <li>OOP Concepts</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Tools & Platforms
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman (Basic)</li>
              <li>Figma (Basic)</li>
              <li>Canva (Basic)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
