import Image from "next/image";
import AnimatedBlob from "./animate-blob";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen px-6 text-white text-center relative overflow-hidden">

      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-lavanda-vibrante/40 via-berry/40 to-carmesi/40" />

      {/* Blob animado con Framer Motion */}
      <div className="absolute top-10 left-10 -z-10">
        <AnimatedBlob />
      </div>

      {/* Blobs luminosos */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-lavanda-vibrante/50 blur-[120px] rounded-full animate-blob" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-berry/40 blur-[130px] rounded-full animate-blob animation-delay-2000" />
      <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-carmesi/30 blur-[120px] rounded-full animate-blob animation-delay-4000" />

      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/brandmark/brandmark-master.svg"
          alt="Logo LEAD UTP"
          width={320}
          height={170}
          draggable={false}
          className="mx-auto drop-shadow-2xl w-48 sm:w-72 h-auto select-none pointer-events-auto"
        />
      </div>

      {/* Título */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
        ¡Bienvenidos!
      </h1>

      {/* Texto */}
      <p className="text- sm:text-xl font-medium max-w-xl mb-2 text-gray-300 text-balance">
        Muy pronto abriremos las puertas de nuestro sitio oficial.
      </p>

      <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-xl mb-6 text-gray-200">
        Prepárate para explorar un espacio lleno de{" "}
        <span className="text-red-700/90 font-bold">
          tecnología, innovación y liderazgo
        </span>
        , creado por estudiantes para estudiantes.
      </p>

      {/* CTA */}
      <div>
        <span className="inline-block bg-white text-primary font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition">
          #CodeTheFuture
        </span>
      </div>
    </div>
  );
}
