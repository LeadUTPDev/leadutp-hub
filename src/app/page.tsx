import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen px-6 bg-background text-white text-center">
      
      {/* Logo Co-branded */}
      <div className="mb-8">
        <Image
          src="/images/co-branded.jpg"
          alt="Co-branded Logo"
          width={320}
          height={140}
          className="mx-auto drop-shadow-lg w-48 sm:w-72 h-auto"
        />
      </div>

      {/* Título principal */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 animate-pulse">
        ¡Bienvenidos!
      </h1>

      {/* Frase memorativa */}
      <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 max-w-xl">
        Muy pronto el sitio oficial de nuestra comunidad estudiantil 
        enfocada en <span className="text-purple-400 font-bold">tecnología, innovación y liderazgo</span>.
      </p>

      {/* Call to Action estilo hashtag */}
      <div>
        <span className="inline-block bg-white text-blue-900 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-100 transition">
          #CodeTheFuture
        </span>
      </div>
    </div>
  );
}
