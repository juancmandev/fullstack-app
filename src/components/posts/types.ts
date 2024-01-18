type SessionProps = {
  session: any;
};

type TPostProps = {
  author: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
  } | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  authorId: string | null;
  session: any;
};

export type { SessionProps, TPostProps };
