import Image from "next/image";
import Link from "next/link";

const SectionPrincipal = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/img/img-fundo.jpg"
        alt="Background"
        fill
        quality={100}
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col h-full w-[80vw] max-w-2xl mx-auto items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          A melhor pizza da cidade
        </h1>
        <p className="text-white text-1xl md:text-xl mb-8">
          Pizzas artesanais feitas com ingredientes frescos e selecionados,
          assadas no forno a lenha para um sabor autêntico e inesquecível.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#cardapio"
            className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors"
          >
            Ver Cardápio
          </a>

          <Link
            href="/reserva"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Reservar Mesa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionPrincipal;