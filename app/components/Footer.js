import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16'>
            <div className="mycontainer py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="logo font-bold text-white text-3xl mb-4">
                            <span className='text-blue-400'>&lt;</span>
                            <span>Pass</span><span className='text-purple-400'>OP/&gt;</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Your secure and reliable password manager. Keep all your passwords safe and organized in one place with military-grade encryption.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://t.me/Mavewren" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/kirit02/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}


                    {/* Legal & Support */}

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 PassOP. All rights reserved. Built with security in mind.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span className="text-gray-400 text-sm">Made with</span>
                        <span className="text-red-500">❤️</span>
                        <span className="text-gray-400 text-sm">for your security</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
