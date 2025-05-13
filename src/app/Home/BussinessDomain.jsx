"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BussinessDomain = () => {
  const domains = [
    {
      title: "E-commerce",
      description: "The business domain of building online shopping platforms encompasses the strategies, operations, and technologies involved in creating digital marketplaces where businesses can showcase products, manage transactions, handle logistics, and deliver seamless customer experiences.",
    },
    {
      title: "Healthcare",
      description: "The healthcare domain involves designing systems and solutions that enhance patient care, streamline clinical workflows, ensure regulatory compliance, and support data-driven decision-making across medical institutions.",
    },
    {
      title: "Finance",
      description: "Developing robust financial platforms that support budgeting, expense tracking, investment analysis, and secure transaction processing — empowering individuals and businesses to make data-driven financial decisions with confidence.",
    },
    {
      title: "Healthcare",
      description: "Building secure and scalable digital solutions that streamline patient records, appointment scheduling, diagnostics, and clinical workflows — enhancing the efficiency, accuracy, and quality of healthcare delivery.",
    },
  ];

  return (
    <div className="py-10">
      <section className="max-w-6xl mx-auto px-4">
        <motion.div className="flex flex-col md:flex-row gap-6 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUpVariant} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-gray-800 settext">Business Domain</h1>
          <p className="text-gray-600 text-lg font-semibold mt-4 flex items-center">"A business domain refers to a specific sphere of activity, knowledge, and processes that define the core operations, rules, and challenges of a particular business or industry sector."</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {domains.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariant}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BussinessDomain;
