import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SigninForm from './signin-form';

export default async function Signin() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }

  return (
    <div className='max-w-[280px] mx-auto mt-20'>
      <h1 className='font-bold text-xl mb-5'>Sign in</h1>

      <SigninForm />
    </div>
  );
}
