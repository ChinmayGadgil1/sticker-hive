"use client"
import { useState,useRef, useEffect } from "react";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import NewFooter from "./components/NewFooter";
import {motion} from "framer-motion"
import { useInView ,useAnimation} from "framer-motion";

export default function Home() {


  return (
    <div  className="bg-custom-gradient overflow-hidden "
    
      >
        <Navbar/> 
        <Hero />
        <Benefits />
        <NewFooter />
     
      </div>  
  );
}
