'use client';
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  console.log('Session', session);
  if (status === 'loading') {
    return <>Loading...</>;
  }
  if (status === 'authenticated') {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <p className=" text-black font-bold ">
            Signed in as {session.user.email}
          </p>
          <button
            className='className="border-solid  border-black border-2 rounded mt-10 px-4 pt-2 pb-2 "'
            onClick={() =>
              signOut(() => {
                console.log('Sign out');
              })
            }
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <a
          className="border-solid  border-black border-2 rounded mt-10 px-4 pt-2 pb-2 "
          href="/login"
        >
          Login
        </a>
        <a
          className="border-solid  border-black border-2 rounded mt-10 px-4 pt-2 pb-2 "
          href="/register"
        >
          Sign Up
        </a>
      </div>
    </>
  );
}
