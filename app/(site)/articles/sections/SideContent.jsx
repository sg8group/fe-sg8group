import SocialLinks from "@/components/ui/SocialLinks";
import Image from "next/image";
import React from "react";

function SideContent() {
  return (
    <aside className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white space-y-6">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/primLogo_sg8.png"
          alt="SG8 Group Logo"
          width={140}
          height={60}
          className="object-contain"
        />
      </div>

      {/* About */}
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed text-justify">
        <h2 className="text-base font-bold text-black">About SG8 Group</h2>

        <p className="indent-6">
          Sutanto Group (SG8) is a holding company established since 1989,
          serving both local and multinational clients.
        </p>

        <p className="indent-6">
          For 35+ years, we’ve delivered cleaning, manpower, rental,
          hospitality, and consulting services.
        </p>

        <ol className="list-decimal ml-5 space-y-1">
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
      </div>

      {/* Social */}
      <div className="pt-4 border-t">
        <p className="text-md font-medium text-gray-700 mb-3">Follow us on:</p>
        <SocialLinks />
      </div>
    </aside>
  );
}

export default SideContent;
