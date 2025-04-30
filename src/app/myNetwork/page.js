import Image from "next/image";
import React from "react";

const page = () => {
  const network = [
    {
      name: "Brooklyn Simmons",
      role: "Creative Director",
      department: "Design",
      joined: "30th Jan, 2022",
      projects: 15,
      lastSeen: "2m ago",
      image: "/assets/istockphoto-1682296067-612x612.jpg",
      localTime: "2:30 AM",
    },
    {
      name: "Jane Cooper",
      role: "Policy Advisor",
      department: "Strategy",
      joined: "12th Jul, 2021",
      projects: 10,
      lastSeen: "5m ago",
      image: "/assets/istockphoto-476776588-612x612.jpg",
      localTime: "3:15 AM",
    },
    // Add more members as needed
  ];
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Network</h1>
        <div className="space-y-6">
          {network.map((person, index) => (
            <div key={index} className=" rounded-2xl   flex flex-col sm:flex-row items-center p-6 gap-6">
              {/* Left: Profile Image */}
              <Image src={person.image} alt={person.name} width={400} height={300} className="w-40 h-40 object-cover rounded-xl" />

              {/* Right: Info */}
              <div className="flex-1 w-full">
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{person.name}</h2>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">Send Message</button>
                    <span className="text-sm text-gray-500">{person.localTime} Local time</span>
                  </div>
                </div>

                {/* Middle Info Grid */}
                <div className="grid grid-cols-2 gap-y-2 text-sm bg-gray-50 rounded-xl px-4 py-3 mb-4">
                  <div className="text-gray-500">Role</div>
                  <div className="text-gray-700">{person.role}</div>
                  <div className="text-gray-500">Department</div>
                  <div className="text-gray-700">{person.department}</div>
                  <div className="text-gray-500">Joined</div>
                  <div className="text-gray-700">{person.joined}</div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between text-sm text-gray-500 px-1">
                  <div>{person.projects} Projects finished</div>
                  <div>Last seen {person.lastSeen}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
