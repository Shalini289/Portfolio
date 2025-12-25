import Image from "next/image";

export default function Home() {
  return (
  <main>
      <section  id ="home" className="min-h-screen bg-black flex gap-50 items-center justify-center px-8">
       <div>
      
      
        <Image
  src="/profile.jpg"
  alt="Hero Image"
  width={200}
  height={100}
  margin={40}
  className="border-5 border-purple-500 object-cover rounded-xl"

/>
 
</div> 
        <div className="max-w-4xl text-center">
          
          <p className="text-gray-400 text-lg mb-4">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Shalini <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Bhadouriya
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Frontend Developer | React | JavaScript
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            I build clean, responsive, and user-friendly web applications
            using modern frontend technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Shalini289"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-500 text-white hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>

        </div>
      </section>
    </main>
     
  );
}
