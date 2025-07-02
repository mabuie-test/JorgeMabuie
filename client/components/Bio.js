import Image from 'next/image';

export default function Bio() {
  return (
    <section className="max-w-3xl mx-auto p-6 my-12 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 relative mb-4 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/perfil.jpg"
            alt="Foto de perfil do Mestre"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Mestre [Seu Nome]</h2>
        <p className="text-gray-600 mb-4 italic">Educador • Investigador • Autor</p>
        <p className="text-base leading-relaxed">
          Desde cedo, a minha paixão pela educação levou-me a explorar metodologias inovadoras que promovem o pensamento crítico e a curiosidade. Com mais de dez anos de experiência em ensino e desenvolvimento de conteúdos didáticos em Moçambique, tenho vindo a…
        </p>
      </div>
    </section>
  );
}
