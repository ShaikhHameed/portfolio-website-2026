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
            {/* {AboutContent.map((item,index)=>(
                <Link href={item.link} key={index}>{item.text}</Link>
            ))} */}
            {/* <button onClick={()=>setOpen(!open)}>Menu Toggle</button> */}

            <div className="fixed w-full h-full top-0 left-0 bg-stone-400 z-[1000] text-stone-800">
                <div className="grid grid-cols-2 h-full">
                    <div className="h-full bg-red-100">
                        <div className="h-full w-full flex flex-col items-end justify-end px-4 py-2">
                            <div className="text-start">
                            <h1>Shaikh</h1>
                            <h2 className="text-8xl font-bolder">Hameed</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}