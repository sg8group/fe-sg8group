import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function SideContent() {
  return (
    <div className="px-5 py-5 border border-gray-300 text-black rounded-xl" leading-relaxed>
      <img src="/primLogo_sg8.png" alt="logo SG8 Group" />
      <h1 className=" text-lg mb-3 font-bold">About SG8 Group</h1>
      <p className=" text-gray-700 text-sm text-justify indent-4">
        Sutanto Group (SG8) is a holding company that has existed since 1989 for
        PT Citra Mandiri Cemerlang Prima and PT Dwitunggal Jaya Pratama Maju.
      </p>

      <p className=" text-gray-700 text-sm text-justify mt-3 indent-4">
        For 35+ years, we have been helping many clients from local and
        multinational companies.
      </p>

      <p className=" text-gray-700 text-sm text-justify mt-3 indent-4">
        SG8 Group is our new brand for the holding company that also owns:
      </p>
      <ol className="list-decimal text-gray-700 text-sm ml-7 mt-2">
        <li>
          <strong>SG8 Clean</strong> (For Cleaning Services)
        </li>
        <li>
          <strong>SG8 Recruit</strong> (For Manpower Supply Services)
        </li>
        <li>
          <strong>SG8 Drive</strong> (For Car Rental Services)
        </li>
        <li>
          <strong>SG8 Care</strong> (For Hospitality Services)
        </li>
        <li>
          <strong>SG8 Consulting</strong> (For Business Growth Services)
        </li>
      </ol>

      <div className="hidden lg:block text-gray-700 mt-5">
        <p className="section-title text-md font-medium leading-relaxed normal-case">
          Follow us on:
        </p>

        <div className="flex gap-4 text-lg my-2.5">
          <a href="#" className="hover:text-pink-600 transition">
            <FaInstagram className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <a href="#" className="hover:text-blue-800 transition">
            <FaLinkedinIn className="h-6 w-6 md:h-7 md:w-7  " />
          </a>
          <a href="#" className="hover:text-blue-800 transition">
            <FaFacebookSquare className="h-6 w-6 md:h-7 md:w-7 rounded-md" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideContent;
