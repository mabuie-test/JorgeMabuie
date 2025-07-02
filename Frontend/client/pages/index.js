import axios from 'axios';
import Link from 'next/link';

export default function Home({ articles }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Bem-vindo ao meu Cartão Postal</h1>
      <ul>
        {articles.map(a => (
          <li key={a._id} className="mb-2">
            <Link href={`/articles/${a._id}`}>
              <a className="text-blue-600 hover:underline">{a.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/articles');
  return { props: { articles: res.data } };
}
