'use client';
import Link from "next/link";
import { useMenu } from "./context/menu/menuContext";

export default function Home() {
  const { open, setOpen } = useMenu();

  return (
    <>
      <Link href={'/about'}>About Page</Link>
      <hr/>
      <h1>Scientists reveal the <strong>Hi</strong></h1>
      <p>{open ? 'Menu is Open' : 'Menu is Closed'}</p>
      <button onClick={()=>setOpen(!open)}>Change Menu</button>
    </>
  );
}
