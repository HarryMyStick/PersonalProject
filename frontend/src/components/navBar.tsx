import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold order-1 lg:order-none">
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        alt="Logo"
                    />
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            Home
                        </Link>
                        <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            About
                        </Link>
                        <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden order-2">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
