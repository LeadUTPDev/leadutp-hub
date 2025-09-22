export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          👋 ¡Bienvenidos!
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Próximamente el sitio web oficial de <span className="font-bold text-purple-700">LEAD UTP</span>
        </p>
        <div className="flex justify-center">
          <span className="inline-block bg-white text-blue-800 font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-100 transition">
            #Vamooos!!!
          </span>
        </div>
      </div>
      </main>
    </div>
  );
}
