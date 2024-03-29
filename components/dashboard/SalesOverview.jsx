import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySumaryCard from "./InventorySumaryCard";

const SalesOverview = () => {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color:"text-red-600",
    },
    {
        title: "To be Shipped",
        number: 0,
        unit: "Pkgs",
        href: "#",
        color:"text-blue-600",
      },
      {
        title: "To be Delivered",
        number: 0,
        unit: "Pkgs",
        href: "#",
        color:"text-green-600",
      },
      {
        title: "To be Invoiced",
        number: 10,
        unit: "Qty",
        href: "#",
        color:"text-yellow-600",
      },
  ];
  const inventorySummary=[
    {
        title:"QUANTITY IN HAND",
        number:10,

    },
    {
        title:"QUANTITY TO BE RECEIVED",
        number:0,

    },
    
  ]
  return (
    <div className="bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4 ">
      <div className="col-span-8 p-8 border-r border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="pr-8  grid grid-cols-4 gap-4">
            {
                salesActivity.map((item,i)=>{
                    return(
                        <SalesActivityCard item={item} key={i} />

                    )
                })
            }
       
        </div>
      </div>
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
       <div>
      {
        inventorySummary.map((item,i)=>{
            return(
               <InventorySumaryCard item={item} key={i} />
            )
        })
      }
       </div>
      </div>
    </div>
  );
};

export default SalesOverview;
