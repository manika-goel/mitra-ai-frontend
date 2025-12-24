"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BrainCircuit, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'AI Therapy', href: '/ai-therapy' },
        { name: 'About Us', href: '/information' },
        { name: 'Meditation', href: '/meditation' },
        { name: 'Community', href: '/community' },
    ];

    return (
        <>
            {/* z-[9999] ensures it stays above modals and other components.
                fixed top-6 creates the floating gap from the roof of the screen.
            */}
            <nav className="fixed top-1 left-0 right-0 z-[9999] flex justify-center px-2">
                <div className="w-full flex items-center justify-between px-5 py-3
                bg-transparent backdrop-blur-xl border border-white/20rounded-2xl">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="">
                            <Image
                                src="/short logo.png"
                                alt="Remote Image"
                                width={40}
                                height={25} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-800">
                            Mitr<span className="text-indigo-600">AI</span>
                        </span>
                    </Link>
                    <div className='flex gap-10'>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-black hover:text-indigo-600 transition-all hover:scale-105"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/auth"
                                className="text-sm font-semibold text-slate-600 px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/auth"
                                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                            >
                                <Sparkles className="w-4 h-4" />
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-slate-600 bg-slate-50 rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-100 p-6 md:hidden flex flex-col gap-5"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-700 hover:text-indigo-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-slate-100" />
                            <div className="flex flex-col gap-3">
                                <Link href="/login" className="text-center py-3 font-semibold text-slate-600">Log In</Link>
                                <Link href="/signup" className="text-center py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200">
                                    Join Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}