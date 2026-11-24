'use client';
import { useMenu } from "@/app/context/menu/menuContext";
import styles from './nav.module.css';
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AboutType {
    link: string,
    text: string
}

const AboutContent: AboutType[] = [
    { link: "/about", text: "About Me" },
    { link: "/work", text: "My Work" },
    { link: "/contact", text: "Contact" }
];

gsap.registerPlugin(useGSAP);

export default function Navbar() {
    // Elements refs 
    const TotalAnimtedTiles = 3; // Total number of Animated Tiles. (too lazy to create a new Ref for Nav Container so using same Ref name)
    const MenuAnimatedItems = useRef<(HTMLDivElement | null)[]>([]);
    const MenuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const { open, setOpen } = useMenu();
    const closeMenu = () => {
        // reverse Animation on Close.
        gsap.fromTo(MenuAnimatedItems.current, {
            x: 0
        }, {
            x: "-100%",
            duration: 0.6,
            stagger: {
                each:0.1,
                from:'end'
            },
            ease: "power4.inOut"
        });
        setOpen(false);
    }

    useGSAP(() => {
        if (open) {
            const gsapTl = gsap.timeline();
            gsapTl
            .fromTo(MenuAnimatedItems.current, {
                x: "100%"
            }, {
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power4.inOut"
            }) // menuTiles and Container
            .fromTo(MenuItemsRef.current,{
                opacity:0,
                y:30
            },{
                opacity:1,
                y:0,
                duration:1,
                stagger:0.1,
                ease:"power2.in"
            }, '-=0.5') // Menu Items
            
            ; 
        }
    }, [open]);

    return (
        <>
            <div className={styles.navAnimContainer}>
                {Array.from({ length: TotalAnimtedTiles }, (_, index) => (
                    <div key={index} ref={(el) => { MenuAnimatedItems.current[index] = el }}></div>
                ))}
            </div>
            <div ref={(el) => { MenuAnimatedItems.current[TotalAnimtedTiles] = el }} className={`bg-stone-700 ${styles.navContainer} text-stone-200`}>
                <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-[1px]">
                    <div className="h-full">
                        <div className="h-full w-full flex flex-col items-end justify-end px-4 py-2">
                            <div className="text-start">
                                <p onClick={closeMenu}>Close Menu</p>
                                {/* <h1>Shaikh</h1>
                            <h2 className="text-8xl font-bolder">Hameed</h2> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="px-16 text-6xl">
                            <ul className="max-w-lg mx-auto md:ms-auto block">
                                {AboutContent.map((item, index) => (
                                    <li key={index} ref={(el) => { MenuItemsRef.current[index] = el }}>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}