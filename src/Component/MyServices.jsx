import React from "react";

const MyServices = () => {
  const services = [
    { title: "Web design", icon: "/public/asset/icons8-website-80.png" },
    { title: "Mobile app", icon: "/public/asset/icons8-mobile-app-64.png" },
    { title: "UI/ UX design", icon: "/public/asset/icons8-ui-ux-design-50.png" },
    { title: "Graphics design", icon: "/public/asset/icons8-design-50.png" },
  ];

  return (
    <section className="py-16 px-6 text-center max-w-6xl mx-auto">
      <h4 className="text-gray-500">What I offer</h4>
      <h2 className="text-4xl font-ovo mb-4">My services</h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60 hover:bg-pink-50">
            <img src={service.icon} alt={service.title} className="w-10 h-10 mb-4 bg-slate-100" />
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Web development is the process of building, programming...</p>
            <a href="#" className="text-sm text-blue-600">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
