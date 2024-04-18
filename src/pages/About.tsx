// src/pages/About.tsx

const About = () => {
    return (
      <div className="text-white py-10 px-4 flex flex-col items-center justify-center md:flex-row md:justify-around">
        <div className="relative mt-10 md:mt-0 md:ml-10">
          {/* Marco trasero con borde redondeado, sombra, borde verde vivo, y fondo transparente */}
          <div className="rounded-lg shadow-lg p-1 inline-block border-4 border-green-500">
            {/* La imagen sobresale un poco hacia arriba y a la izquierda */}
            <img
              src="/public/images/foto 3x4.jpg" // Asegúrate de reemplazar con la ruta correcta de tu imagen.
              alt="About me"
              className="w-[200px] h-[200px] rounded-lg object-cover transform translate-y-[-11%] translate-x-[-10%]"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
          <p className="mb-6">
            Full-stack developer con experiencia en JavaScript, HTML, CSS, React, Node.js, Express, Next.js y MySQL...
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#0284c7] hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded">HIRE ME</button>
            <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-6 border border-green-500 hover:border-transparent rounded">
              RESUME
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  