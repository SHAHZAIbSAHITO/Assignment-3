"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Home = () => {
  const router = useRouter();
  return (
  
    <div>Home <br />
    
      {/*<Link href="/navbar">go to navbar page</Link><br />
      <Link href="/about">go to about page</Link><br />
      <Link href="/contact">go to contact page</Link><br />
      <Link href="/footer">go to footer page</Link><br /> */}
      <button onClick={()=> router.push('/navbar')}>Navbar</button>  <b />
      <button onClick={()=> router.push('/about')}>About</button>  <b />
      <button onClick={()=> router.push('/contact')}>Contact</button>  <b  />
      <button onClick={()=> router.push('/footer')}>Footer</button> 
    </div>
  );
}

export default Home
