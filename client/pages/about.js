import Bio from '../components/Bio';

export default function About() {
  return (
    <div className="py-8">
      <Bio />
      <section className="max-w-3xl mx-auto p-6">
        <h3 className="text-xl font-semibold mb-2">Redes Sociais</h3>
        <ul className="list-disc list-inside">
          <li><a href="https://linkedin.com/in/seunome" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li><a href="https://github.com/seunome" className="text-blue-600 hover:underline">GitHub</a></li>
        </ul>
        <div className="mt-4">
          <a
            href="/cv/Mestre_CV.pdf"
            download
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
          >
            Descarregar o Meu CV
          </a>
        </div>
      </section>
    </div>
  );
}
