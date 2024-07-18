import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button } from 'antd';
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 border-b-2">
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Stocks
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Futures & Options
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Mutual Funds
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Fixed deposits
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            About
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Products
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Pricing
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Careers
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
                            Press & Media
                        </li>
                    </ul>
                </div>

                <div className="md:p-5 md:text-right">
                    <ul>
                        <li className="text-gray-800 font-bold text-3xl pb-6">
                            cre<span className="text-blue-600">w</span>in
                        </li>
                        <li className="text-gray-800 w-64 md:w-96 md:text-right mr-0 font-normal text-sm pb-6">
                            MARITIME WORKFORCE PLATFORM THAT MEETS
                            SHEFARERS & SEAFARERS WITH SHIPPING COMPANIES
                        </li>
                        <li>
                            <Link href="/login">
                                <Button type="primary">
                                    Login
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-normal">
                    © 2021-2022 All rights reserved | Build with ❤ by{" "}
                    <span className="hover:text-blue-600 font-normal cursor-pointer">
                        streamline{" "}
                    </span>
                </h1>
                <div className="flex gap-6 pb-5">
                    <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                    <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                </div>
            </div>
        </>
    );
}

export default Footer;