'use client';
import { useMenu } from "@/app/context/menu/menuContext";
import Link from "next/link";

const AboutContent =[
    {link:"/about", text:"About Me"},
    {link:"/work", text:"My Work"},
    {link:"/contact", text:"Contact"}
];

export default function Navbar() {
    const {open,setOpen} = useMenu();
    return (
        <>
            {AboutContent.map((item,index)=>(
                <Link href={item.link} key={index}>{item.text}</Link>
            ))}
            <button onClick={()=>setOpen(!open)}>Menu Toggle</button>

        </>
    )
}