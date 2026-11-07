import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default function Footer(){
    return (
        <>
        <div className="w-full h-auto fixed bottom-0 left-0 px-4 py-2 border-stone-200/50 border-t-1 z-[500]">
            <Link href={'/contact'}>
                <p className="text-xs font-font-thin text-center flex flex-row gap-2 justify-center items-center cursor-pointer ">Download Resume <LuExternalLink/></p>
            </Link>
        </div>
        </>
    )
}