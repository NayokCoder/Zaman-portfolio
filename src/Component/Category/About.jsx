import React from "react";
import { FaAward, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-lg leading-7 mb-6">
        Hello! I’m <strong>MD. Moniruzzaman</strong>, a certified <strong>Project Management Professional (PMP®)</strong> with over <strong>15 years of experience</strong> in the ICT sector. I specialize in leading end-to-end software development, IT service delivery, and digital transformation initiatives in both government and private sectors.
      </p>

      <p className="text-lg leading-7 mb-6">
        Throughout my career, I’ve successfully managed cross-functional teams and multimillion-dollar projects for organizations like <strong>a2i (UNDP)</strong>, <strong>NBR (VAT Online Project)</strong>, and various Government of Bangladesh initiatives. I’ve also contributed to projects in collaboration with international companies including <strong>Microsoft, Tesla,</strong> and <strong>Apple</strong>.
      </p>

      <p className="text-lg leading-7 mb-6">
        My expertise includes Agile methodologies, Scrum, DevOps, CI/CD, and cloud-based delivery platforms. I’m well-versed in tools such as <strong>JIRA, ClickUp, GitHub Actions, Docker, AWS, Azure</strong>, and more. I’m passionate about aligning business goals with technology, streamlining processes, and driving measurable results.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="flex items-start gap-3">
          <FaAward className="text-red-600 text-3xl" />
          <div>
            <h4 className="font-semibold text-xl">Certifications</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>PMP® – Project Management Professional</li>
              <li>Advanced Certificate in Management Practices (IBA - DU)</li>
              <li>UNDP a2i Government Project Training</li>
              <li>BASIS & ICT Division Trainings</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaCheckCircle className="text-blue-600 text-3xl" />
          <div>
            <h4 className="font-semibold text-xl">Core Competencies</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Agile Project Management</li>
              <li>DevOps & CI/CD Pipelines</li>
              <li>Stakeholder Communication</li>
              <li>Risk & Resource Management</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaProjectDiagram className="text-green-600 text-3xl" />
          <div>
            <h4 className="font-semibold text-xl">Key Projects</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>myGov ITSM – National e-Gov Infrastructure</li>
              <li>VAT Online Project – NBR</li>
              <li>UNDP a2i Innovations</li>
              <li>Custom ERP & E-Commerce Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
