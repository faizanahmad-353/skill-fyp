import { Link } from "react-router-dom";
import { useState } from "react";
import { Ban, 
  CheckCircle, 
  Inbox,
  RefreshCw,
  Clock,
  Award,
  User,
  Eye,
  Timer,
  BookText,
  HandCoins
 } from "lucide-react";

type SwapCount={
  total: number;
  status: string;
}
  const swapCount: SwapCount[] = [
    {
      total: 10,
      status: "total",
    },
    {
      total: 4,
      status: "pending",
    },
    {
      total: 2,
      status: "active",
    },
    {
      total: 6,
      status: "completed",
    },
    {
      total: 10,
      status: "cancelled",
    },
  ]

type swapData = {
  id: number;
  name: string;
  offered: string;
  skills: {
    status: string;
    offeringSkills: string;
    requestingSkills: string;
    schedule: string;
    createdAt: string;
  };
};

const date = new Date().toLocaleString("en-PK", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true, 
});
const SwapData: swapData[] = [
  {
    id: 1,
    name: "Faizan",
    offered:"sent",
    skills: {
      status: "pending",
      offeringSkills: "Web Development",
      requestingSkills: "Graphic Design",
      schedule: date,
      createdAt: "2023-01-10"
    }
  },
  {
    id: 2,
    name: "Ahmed",
    offered:"received",
    skills: {
      status: "completed",
      offeringSkills: "Node.js",
      requestingSkills: "Mobile App Design",
      schedule: date,
      createdAt: "2023-05-20"
    }
  },
  {
    id: 3,
    name: "Usman",
    offered:"received",
    skills: {
      status: "cancelled",
      offeringSkills: "SEO",
      requestingSkills: "Content Writing",
      schedule: date,
      createdAt: "2023-08-12"
    }
  },
  {
    id: 4,
    name: "Faizan",
    offered:"sent",
    skills: {
      status: "active",
      offeringSkills: "React",
      requestingSkills: "Backend APIs",
      schedule: date,
      createdAt: "2024-02-01"
    }
  },
  {
    id: 5,
    name: "Sara",
    offered: "received",
    skills: {
      status: "pending",
      offeringSkills: "UI/UX Design",
      requestingSkills: "React",
      schedule: date,
      createdAt: "2024-01-15"
    }
  },
  {
    id: 6,
    name: "Hassan",
    offered: "received",
    skills: {
      status: "active",
      offeringSkills: "Backend APIs",
      requestingSkills: "React",
      schedule: date,
      createdAt: "2024-01-20"
    }
  },
  {
    id: 7,
    name: "Faizan",
    offered: "sent",
    skills: {
      status: "active",
      offeringSkills: "React",
      requestingSkills: "Backend APIs",
      schedule: date,
      createdAt: "2024-02-01"
    }
  },
];

export default function Swaps() {
  const [swapData, setSwapData] = useState<swapData[]>(SwapData);

  const allSwap = () => {
    setSwapData(SwapData);
  }

  const sentSwap = () => {
    setSwapData(SwapData.filter((swap) => swap.offered === "sent"));
  }
  const receivedSwap =()=>{
    setSwapData(SwapData.filter((swap)=> swap.offered === "received"))
  }

  const showOfferredMessage = (offered: string) =>{
    if(offered === "sent"){
      return <p>You offered this swap request</p>
    }
    else{
      return <p>You received this swap request</p>
    }
  }


  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500 shrink-0"/>;
      case "active":
        return <CheckCircle className="w-5 h-5 text-green-500 shrink-0"/>;
      case "completed":
        return <Award className="w-5 h-5 text-blue-500 shrink-0"/>;
      case "cancelled":
        return <Ban className="w-5 h-5 text-red-500 shrink-0"/>;
      default:
        return <Inbox className="w-5 h-5 text-gray-500 shrink-0"/>;
    }
  };

  const getButton = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <div className="flex flex-col sm:flex-row gap-2 w-full ">
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><CheckCircle className="w-5 h-5 shrink-0" /> Accept</button>
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Ban className="w-5 h-5 shrink-0"/>Cancel</button>
          </div>
        );
      case "active":
        return (
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Award className="w-5 h-5 shrink-0"/> Complete</button>
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Ban className="w-5 h-5 shrink-0"/> Cancel</button>
          </div>
        );
      case "completed":
        return (
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Eye className="w-5 h-5 shrink-0"/> View</button>
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Ban className="w-5 h-5 shrink-0"/> Cancel</button>
          </div>
        );
      case "cancelled":
        return (
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Eye className="w-5 h-5 shrink-0"/> View</button>
            <button className="flex justify-center items-center gap-2 btn-gradient-outline whitespace-nowrap"><Ban className="w-5 h-5 shrink-0"/> Cancel</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 gap-4">
  <div className="w-full sm:w-auto">
    <h1 className="text-gradient font-bold text-2xl sm:text-3xl">
      My Swaps
    </h1>
    <p className="text-gray-500 text-sm sm:text-base">
      Manage your swap requests
    </p>
  </div>
  <div className="w-full sm:w-auto flex justify-start sm:justify-end">
    <button className="btn-gradient flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2">
      <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
      Refresh
    </button>
  </div>

</div>

   {/*  */}

   <div className="flex flex-wrap justify-center w-full gap-4 p-5">
    {
      swapCount.map((swapCount,index)=>(
        <div key={index}>
          {swapCount.status === "total" ? (
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl border-2 border-secondary w-full md:w-60 cursor-pointer hover:shadow-md transition-shadow hover:bg-linear-to-r from-white to-secondary/50 hover:-translate-y-2">
              <p className="flex items-center gap-2 text-gray-600 font-semibold"><Inbox className="w-5 h-5 shrink-0"/> {swapCount.status}</p>
              <p className="text-2xl font-bold">{swapCount.total}</p>
            </div>
          ) : 
          swapCount.status === "pending" ? (
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl border-2 border-secondary w-full md:w-60 cursor-pointer hover:shadow-md transition-shadow hover:bg-linear-to-r from-white to-secondary/50 hover:-translate-y-2">
              <p className="flex items-center gap-2 text-gray-600 font-semibold"><Clock className="w-5 h-5 text-yellow-500 shrink-0"/> {swapCount.status}</p>
              <p className="text-2xl font-bold">{swapCount.total}</p>
            </div>
          ) :
          swapCount.status === "active" ? (
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl border-2 border-secondary w-full md:w-60 cursor-pointer hover:shadow-md transition-shadow hover:bg-linear-to-r from-white to-secondary/50 hover:-translate-y-2">
              <p className="flex items-center gap-2 text-gray-600 font-semibold"><CheckCircle className="w-5 h-5 text-green-500 shrink-0"/> {swapCount.status}</p>
              <p className="text-2xl font-bold">{swapCount.total}</p>
            </div>
          ) :
          swapCount.status === "completed" ? (
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl border-2 border-secondary w-full md:w-60 cursor-pointer hover:shadow-md transition-shadow hover:bg-linear-to-r from-white to-secondary/50 hover:-translate-y-2">
              <p className="flex gap-2 items-center text-gray-600 font-semibold"><Award className="w-5 h-5 text-blue-500 shrink-0"/> {swapCount.status}</p>
              <p className="text-2xl font-bold">{swapCount.total}</p>
            </div>
          ) :
          swapCount.status === "cancelled" ? (
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl border-2 border-secondary w-full md:w-60 cursor-pointer hover:shadow-md transition-shadow hover:bg-linear-to-r from-white to-secondary/50 hover:-translate-y-2">
              <p className="flex items-center gap-2 text-gray-600 font-semibold"><Ban className="w-5 h-5 text-red-500 shrink-0"/> {swapCount.status}</p>
              <p className="text-2xl font-bold">{swapCount.total}</p>
            </div>
          ) : null}
        </div>
      ))
    }
   </div>

   {/*  */}

   <div className="flex flex-col gap-6 md:gap-10 my-6 md:my-10 px-4 md:px-10">
<div className="flex flex-wrap gap-3 sm:gap-10" >
  <button onClick={allSwap} className="flex-1 sm:flex-none justify-center btn-gradient-outline whitespace-nowrap">All Swaps</button>
  <button onClick={sentSwap} className="flex-1 sm:flex-none justify-center btn-gradient-outline whitespace-nowrap">Sent Swaps</button>
  <button onClick={receivedSwap} className="flex-1 sm:flex-none justify-center btn-gradient-outline whitespace-nowrap">Received Swaps</button>
</div>
{/*  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {swapData.map((swap) => (
    <div key={swap.id} className="w-full mx-auto flex flex-col gap-2 bg-white p-6 rounded-xl border-2 border-secondary cursor-pointer hover:shadow-md transition-shadow  hover:-translate-y-2">
      
<div className="flex flex-col sm:flex-row gap-4 py-2 sm:items-start justify-between">
  <div className="flex gap-4 items-center sm:items-start">
    <div className="flex justify-center items-center shrink-0">
      <User className="bg-secondary/20 text-secondary rounded-full p-2 w-12 h-12 md:w-16 md:h-16 shrink-0"/>
    </div>
    <div className="flex flex-col">
      <h2 className="text-2xl md:text-3xl font-semibold text-gradient">{swap.name}</h2>
      <div className="text-gray-500 text-sm md:text-base">{showOfferredMessage(swap.offered)}</div>
    </div>
  </div>
  <div className="flex justify-center sm:justify-start items-center gap-2 bg-gray-100/50 sm:bg-gray-100 rounded-full px-4 py-2 shrink-0 self-start">
    {getStatusIcon(swap.skills.status)}
    <p className="text-sm font-medium capitalize">{swap.skills.status}</p>
  </div>
</div>
<hr className="border-secondary border-t-3" />

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
<div className="flex flex-col gap-2 bg-secondary/20 p-4">
  <p className="text-xl font-semibold flex items-center gap-2"><BookText className="w-5 h-5 "/> Offering Skills</p>
  <p className="text-lg">{swap.skills.offeringSkills}</p>
</div>
<div className="flex flex-col gap-2 bg-green-500/20 p-4">
  <p className="text-xl font-semibold flex items-center gap-2"><HandCoins className="w-7 h-7 "/> Requesting Skills</p>
  <p className="text-lg">{swap.skills.requestingSkills}</p>
</div>
</div>
<p className="flex items-center gap-2 text-lg">
  <Timer className="text-secondary w-5 h-5 shrink-0" />
  Schedule: {swap.skills.schedule}
</p>
<p className="text-gray-500">Created At : {swap.skills.createdAt}</p>

<hr className="border-secondary border-t-3" />

<div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
<Link to="/profile" className="flex gap-2 items-center w-full active:text-blue-600 font-medium"><Eye className="w-5 h-5 shrink-0"/> View Profile</Link> 
{getButton(swap.skills.status)}
</div>
</div>
 ))}
</div>
</div>

    </>
  );
}
