'use client';
import { useMenu } from "../context/menu/menuContext"

export default function About() {
    const { open, setOpen } = useMenu();
    return (
        <>
            <p>{open ? 'Menu is Open' : 'Menu is Closed'}</p>
            <button onClick={()=>setOpen(!open)}>Change Menu</button>
        </>
    )
}