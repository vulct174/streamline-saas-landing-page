"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
            {isOpen && (
                <nav className="absolute top-full left-0 right-0 bg-white shadow-md py-2">
                    <Link href="#features" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                        Features
                    </Link>
                    <Link href="#testimonials" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                        Pricing
                    </Link>
                </nav>
            )}
        </div>
    )
}

export default function Header() {
    return (
        <header className="py-4 px-6 bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-gray-900">StreamLine</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="#features" className="text-gray-600 hover:text-gray-900">
                        Features
                    </Link>
                    <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                        Pricing
                    </Link>
                </nav>
                <MobileMenu />
                <Button>Get Started</Button>
            </div>
        </header>
    )
}

