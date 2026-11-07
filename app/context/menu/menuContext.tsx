'use client';

import { createContext, useContext, useState } from "react";


interface MenuContextType{
    open:Boolean,
    setOpen:(value:Boolean)=>void,
}

const MenuContext = createContext<MenuContextType|undefined>(undefined);

export default function MenuContextProvider({children}:{children:React.ReactNode}){
    const [open,setOpen] = useState<Boolean>(false);
    return (
        <MenuContext.Provider value={{open,setOpen}}>{children}</MenuContext.Provider>
    )
}

export function useMenu(){
    const context = useContext(MenuContext);
    if(!context){
        console.log('Menu Context Error');
        throw new Error('Menu Context Error');
    }
    return context;
}