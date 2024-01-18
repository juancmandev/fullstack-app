'use client';

import DeletePost from './delete';
import EditPost from './edit';
import { TPostProps } from './types';

export default function PostItem(props: TPostProps) {
  return (
    <article className='w-max p-2 border border-slate-500 rounded-md'>
      <header className='flex justify-between items-center'>
        <h2 className='font-bold text-lg'>{props.title}</h2>
        {props.session?.user?.id === props.authorId && (
          <section className='space-x-2'>
            <EditPost {...props} />
            <DeletePost {...props} />
          </section>
        )}
      </header>
      <p>{props.content}</p>
      <span className='text-sm'>
        Posted by {props.author?.email || 'anon'} at{' '}
        {new Date(props.createdAt).toLocaleString()}
      </span>
    </article>
  );
}
