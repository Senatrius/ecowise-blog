'use client';

import Link from "@/node_modules/next/link";
import { useState } from "react";
import { Nav } from "./Nav";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return <header className="w-full">
        <div className="max-w-7xl w-full py-4 px-[6%] mx-auto flex items-center justify-between bg-white shadow-sm">
            <svg width="51" height="27" viewBox="0 0 51 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.481567 27V0.818176H18.7372V5.95738H6.80969V11.3267H13.5L15 16.4787H6.80969V21.8608H16.5L18 27H0.481567Z M21.071 27L13.4517 0.818176H20.4446L24.3949 17.9744H24.6122L29.125 0.818176H34.8267L39.3395 18.0128H39.5568L43.5199 0.818176H50.5L42.8935 27H36.7955L32.0781 11.1222H31.8736L27.1562 27H21.071Z" fill="black" /></svg>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center md:hidden" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>

            <Nav />
        </div>
    </header>
}