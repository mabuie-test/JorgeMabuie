// client/pages/articles/[id].js
import axios from 'axios';

export default function ArticlePage({ article }) {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">{new Date(article.date).toLocaleDateString()}</p>
      <div className="prose">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let articles = [];
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
    articles = res.data;
  } catch (err) {
    console.error('Erro ao buscar lista de artigos:', err.message);
  }
  const paths = articles.map(a => ({ params: { id: a._id } }));
  return {
    paths,
    fallback: 'blocking',  // gera páginas on‑demand se faltar alguma
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.id}`
    );
    return {
      props: { article: res.data },
      revalidate: 60,  // revalida a cada 60 segundos
    };
  } catch (err) {
    console.error(`Erro ao buscar artigo ${params.id}:`, err.message);
    return { notFound: true };
  }
}
