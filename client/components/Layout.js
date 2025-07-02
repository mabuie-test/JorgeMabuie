import Head from 'next/head';
import Bio from './Bio';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cartão Postal do Mestre</title>
        <meta name="description" content="Site pessoal de artigos educativos" />
      </Head>
      <header className="bg-blue-600 text-white p-4">
        <nav className="max-w-5xl mx-auto flex justify-between">
          <a href="/" className="font-bold text-lg">Home</a>
          <a href="/articles" className="hover:underline">Artigos</a>
          <a href="/about" className="hover:underline">Sobre mim</a>
        </nav>
      </header>
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="bg-gray-200 text-gray-700 p-4 text-center">
        © {new Date().getFullYear()} Mestre [Seu Nome]. Todos os direitos reservados.
      </footer>
    </>
  );
}
