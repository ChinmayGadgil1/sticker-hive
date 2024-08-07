"use client"
import { useState,useRef, useEffect } from "react";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import NewFooter from "./components/NewFooter";
import {motion} from "framer-motion"
import { useInView ,useAnimation} from "framer-motion";
import { Slider } from "@/components/ui/slider";

export default function Home() {


  return (
    <div  className="bg-gradient-to-r from-black to-gray-900 overflow-x-hidden "
    
      >
        <Navbar/> 
         
        <Hero />
        <Benefits /> 
        <NewFooter />
     
      </div>  
  );
}
