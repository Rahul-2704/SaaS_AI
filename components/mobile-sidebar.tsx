"use client"
import React from 'react'
import { Button } from './ui/button'
import { Menu } from "lucide-react"
import {useState,useEffect} from "react";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './sidebar'
const MobileSide = () => {
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[]);
    if(!isMounted) return null;
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"} size={"icon"} className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className='p-0'>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSide