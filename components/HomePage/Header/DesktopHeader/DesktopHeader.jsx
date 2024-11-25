"use client";
import Container from "@/components/Ui/Container";
import FullContainer from "@/components/Ui/FullContainer";
import Heading from "@/components/Ui/Heading";

import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
const DesktopHeader = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <FullContainer className="py-5 sticky top-0 bg-white z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-24">
            <Heading>Elegant Dress</Heading>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <Heading>Shop</Heading>
                <RiArrowRightSLine className="text-[22px]" />
              </div>
              {isSubmenuOpen && (
                <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md py-3">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Winter Clothing
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Summer Clothing
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">Accessories</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Search and Cart Section */}
          <div className="flex items-center gap-5 ml-auto">
            {/* Search Input */}
            <input
              placeholder="Search By Product Name"
              className="px-5 py-2 border border-gray-200 rounded-md outline-none w-[750px]"
            />
            {/* Cart Section */}
            <div className="flex items-center gap-2 text-lg">
              <IoMdCart />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default DesktopHeader;
