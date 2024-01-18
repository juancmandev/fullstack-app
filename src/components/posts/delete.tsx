'use client';

import { LucideTrash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { TPostProps } from './types';

export default function DeletePost(props: TPostProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      const res = await fetch('/api/posts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: props.id,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        toast(json.message);

        return;
      }

      toast('Post deleted!');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive' size='icon'>
          <LucideTrash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[300px]'>
        <DialogHeader className='text-left'>
          <DialogTitle>Delete post</DialogTitle>
          <DialogDescription>
            Are you sure you want to <strong>delete</strong> this post? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <footer className='flex flex-col gap-2'>
          <DialogClose asChild>
            <Button variant='secondary' className='w-full'>
              No, keep post
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={handleDelete}
              variant='destructive'
              className='w-full'
            >
              Yes, delete post
            </Button>
          </DialogClose>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
