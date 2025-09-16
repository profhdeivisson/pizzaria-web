// src/components/PageHome/SectionCardapio.tsx
import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    nome: "PIZZAS",
    imagem: "/img/pizza.jpg",
    link: "/pizzas",
  },
  {
    nome: "ESFIHAS",
    imagem: "/img/esfiha.jpg",
    link: "/esfihas",
  },
  {
    nome: "SOBREMESAS",
    imagem: "/img/sobremesas.jpg",
    link: "/sobremesas",
  },
  {
    nome: "BEBIDAS",
    imagem: "/img/bebidas.jpg",
    link: "/bebidas",
  },
];

const SectionCardapio = () => {
  return (
    <section id="cardapio" className="py-10 px-4">
      <h2 className="text-2xl text-center font-bold mb-6">Categorias</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categorias.map((categoria) => (
          <Link href={categoria.link} key={categoria.nome}>
            <div className="border rounded-lg overflow-hidden shadow hover:scale-105 transition">
              <Image
                src={categoria.imagem}
                alt={categoria.nome}
                width={400}
                height={300}
                className="object-cover w-full h-40"
              />
              <div className="text-center py-2 font-semibold">
                {categoria.nome}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCardapio;