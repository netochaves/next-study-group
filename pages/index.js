import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div className={styles.card}>
          <Link href={`/posts/${post.id}`}>
            <a key={post.id}>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
};
