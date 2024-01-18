import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import prisma from '@/libs/db';
import CreatePost from '@/components/posts/create';
import PostItem from '@/components/posts/item';

export default async function Home() {
  const session = await getServerSession(authOptions);

  // You can fetch data to Prisma in server components
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <>
      <h1 className='mb-5 font-bold text-xl'>Home</h1>
      {session ? (
        <>
          <CreatePost session={session} />
        </>
      ) : (
        <>
          <p>You are not logged in</p>
        </>
      )}
      <h3 className='text-lg font-semibold mt-10'>Posts</h3>
      <ul className='mt-5 space-y-2.5'>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <PostItem {...post} session={session} />
            </li>
          ))
        ) : (
          <p>No posts</p>
        )}
      </ul>
    </>
  );
}
