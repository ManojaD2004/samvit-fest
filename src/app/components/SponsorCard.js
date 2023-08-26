import React from "react";

function SponsorCard() {
  return (
    <div
      data-scroll
      className="w-[340px] h-[240px] 
        mt-10 overflow-hidden bg-gradient-radial from-slate-600 to-slate-900
         relative p-4 flex items-center border-2 border-slate-700
        justify-between flex-col flex-shrink-0"
    >
      <img
        data-scroll
        className="object-contain h-full"
        src=""
      />
      <h3 data-scroll>
        INFOSYS-
        <span data-scroll className="text-red-500">
          Co Sponsor
        </span>
      </h3>
    </div>
  );
}

export default SponsorCard;
