import Link from 'next/link';
import { Button } from './ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import SignOut from './sign-out';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className='w-full p-4 border-b flex justify-between items-center'>
      <section>
        <Button variant='link' className='px-0 font-semibold text-lg'>
          <Link href='/'>Fullstack app</Link>
        </Button>
      </section>
      <section>
        {session ? (
          <SignOut />
        ) : (
          <Button asChild>
            <Link href='/auth'>Sign in</Link>
          </Button>
        )}
      </section>
    </nav>
  );
}
