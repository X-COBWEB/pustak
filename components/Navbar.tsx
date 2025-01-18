import { signOut, signIn, auth } from '@/auth';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Navbar = async () => {
    const session=await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={100} height={50} />
        </Link>
        <div className='flex items-center gap-5'>
          {session && session?.user?(
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={async()=>{
                "use server"
                await signOut()
              }}>
                <button type='submit'>Log Out</button>
              </form>
              <Link href={`/profile/${session.user.id}`} >
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ):(
            <form action={async()=>{
              "use server"
              await signIn('github')
            }}>
              <button type='submit'>Login</button>
              
            </form>
          )}
        </div>
      </nav>
    </header>
   
  )
}

export default Navbar