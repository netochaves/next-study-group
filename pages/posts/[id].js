const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
};

export default Post;
