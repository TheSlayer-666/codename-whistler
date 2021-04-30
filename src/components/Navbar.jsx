import React from "react";
import 'twin.macro';
import { BiCut, BiPencil, BiCrop } from "react-icons/bi";
import tw from "twin.macro";
const Navbar = () => {
    const Button = tw.button`
    px-4 py-2 font-medium text-white rounded-md
    capitalize transition-colors duration-200 transform
    font-bold text-lg mx-1 
    bg-gray-800 hover:bg-gray-700
    focus:(outline-none bg-blue-800)
    `;
    return (
        <nav tw="bg-gray-900 shadow text-white">
            <div tw="container px-2 py-3 md:flex">
                <div tw="items-center justify-between">
                    <Button><BiCut /></Button>
                    <Button><BiPencil /></Button>
                    <Button><BiCrop /></Button>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;