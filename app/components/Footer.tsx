"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2023)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">StreamLine</h3>
                    <p className="text-gray-400">Simplifying project management for teams worldwide.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Product</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                Use Cases
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {currentYear} StreamLine. All rights reserved.</p>
            </div>
        </footer>
    )
}

