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
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/articles');
  const paths = res.data.map(a => ({ params: { id: a._id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/api/articles/${params.id}`);
  return { props: { article: res.data } };
}
