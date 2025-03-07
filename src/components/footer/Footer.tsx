import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-black shadow-lg border-gray-400 border-t-4 py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Top Section: Links & Social Icons */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
                    {/* Logo & Copyright */}
                    <div>
                        <h2 className="text-2xl font-bold">Cloud Hosting</h2>
                        <p className="text-sm text-gray-400 mt-1">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-blue-400 transition">Home</a>
                        <a href="#" className="hover:text-blue-400 transition">Pricing</a>
                        <a href="#" className="hover:text-blue-400 transition">About</a>
                        <a href="#" className="hover:text-blue-400 transition">Contact</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Bottom Section: Divider & Additional Info */}
                <div className="mt-6 border-t border-gray-600 pt-4 text-sm text-gray-400 text-center">
                    <p>
                        Designed by <span className="text-blue-400">Omar Horany</span>. Powered by React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;