import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
    const [scrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <nav
                className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-white"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <a href="/">
                        <img src={Logo} className="h-16 md:h-20" alt="Logo" />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-between w-[70%] text-black font-medium">
                        <a href="/" className="text-[#3434eb]">
                            Bosh sahifa
                        </a>

                        <a href="/" className="hover:text-[#3434eb]">
                            Biz haqimizda
                        </a>

                        <a href="/" className="hover:text-[#3434eb]">
                            Yangilik
                        </a>

                        <a href="/" className="hover:text-[#3434eb]">
                            Jamoa
                        </a>

                        <a href="/" className="hover:text-[#3434eb]">
                            Kontakt
                        </a>

                        <a href="/" className="hover:text-[#3434eb]">
                            Galerya
                        </a>

                        {/* Language */}
                        <select className="border rounded-lg px-3 py-1">
                            <option>UZ</option>
                            <option>RU</option>
                            <option>ENG</option>
                        </select>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-black z-[10001]"
                    >
                        <MenuIcon fontSize="large" />
                    </button>
                </div>
            </nav>

            {/* BACKDROP */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 text-blue-950 z-[10000] md:hidden"
                ></div>
            )}

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-[60%] bg-blue-950 z-[10001] transform transition-transform duration-300 md:hidden shadow-2xl ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close */}
                <div className="flex justify-between items-center p-2">

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl text-white"
                    >
                        &times;
                    </button>
                </div>
                <div className="text-center pl-3">
                    <img src={Logo} className="h-25"  alt="Logo" />
                </div>
                {/* Links */}
                <ul className="flex flex-col gap-4  p-3 text-white font-medium">
                    <li>
                        <a href="/" className="text-[#3434eb]">
                            Bosh sahifa
                        </a>
                    </li>

                    <li className="hover:text-blue-600">
                        <a href="/">Biz haqimizda</a>
                    </li>

                    <li>
                        <a href="/">Yangilik</a>
                    </li>

                    <li>
                        <a href="/">Mentor</a>
                    </li>

                    <li>
                        <a href="/">Jamoa</a>
                    </li>

                    <li>
                        <a href="/">Kontakt</a>
                    </li>

                    <li>
                        <a href="/">Galerya</a>
                    </li>

                    <li>
                        <select className="border bg-blue-950 rounded-lg px-3 py-2 w-[90%]">
                            <option>UZ</option>
                            <option>RU</option>
                            <option>ENG</option>
                        </select>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;