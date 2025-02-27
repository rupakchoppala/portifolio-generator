import React, { useState } from "react";
import Portfolio from "../components/preview";

const Editor = () => {
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    description: "",
    about: "",
    techStack: "",
    experience: "",
    projects: [],
    contact: {
      email: "",
      phone: "",
      linkedin: "",
    },
  });

  const [showPreview, setShowPreview] = useState(false);
  const addProject = () => {
    setUserData({ ...userData, projects: [...userData.projects, ""] });
  };

  const updateProject = (index, value) => {
    const updatedProjects = [...userData.projects];
    updatedProjects[index] = value;
    setUserData({ ...userData, projects: updatedProjects });
  };


  return (
    <div className={`${showPreview ? "min-h-screen overflow-x-hidden" : "min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-neutral-200 p-6"}`}
    >
      {showPreview ? (
        <div className="relative">
          {/* Back Button */}
          <button
            className="absolute top-4 left-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => setShowPreview(false)}
          >
            Back to Editor
          </button>

          {/* Portfolio Component */}
          <Portfolio userData={userData} />
         
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Portfolio Generator</h2>

  <div className="space-y-6">
    {/* Name */}
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.name}
      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
    />

    {/* Role */}
    <input
      type="text"
      placeholder="Your Role"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.role}
      onChange={(e) => setUserData({ ...userData, role: e.target.value })}
    />

    {/* About */}
    <textarea
      placeholder="About You"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.about}
      onChange={(e) => setUserData({ ...userData, about: e.target.value })}
    />

    {/* Tech Stack */}
    <input
      type="text"
      placeholder="Tech Stack (comma separated)"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.techStack}
      onChange={(e) => setUserData({ ...userData, techStack: e.target.value })}
    />

    {/* Experience */}
    <textarea
      placeholder="Your Experience"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.experience}
      onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
    />

    {/* Projects */}
    <div className="space-y-4">
      <label className="text-cyan-400 font-semibold">Projects</label>
      {userData.projects.map((project, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Project ${index + 1}`}
          className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
          value={project}
          onChange={(e) => updateProject(index, e.target.value)}
        />
      ))}
      <button
        className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
        onClick={addProject}
      >
        + Add Project
      </button>
    </div>

    {/* Contact */}
    <div className="space-y-4">
      <label className="text-cyan-400 font-semibold">Contact Information</label>
      <input
        type="text"
        placeholder="Email"
        className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
        value={userData.contact.email}
        onChange={(e) =>
          setUserData({ ...userData, contact: { ...userData.contact, email: e.target.value } })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
        value={userData.contact.phone}
        onChange={(e) =>
          setUserData({ ...userData, contact: { ...userData.contact, phone: e.target.value } })
        }
      />
      <input
        type="text"
        placeholder="LinkedIn"
        className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
        value={userData.contact.linkedin}
        onChange={(e) =>
          setUserData({ ...userData, contact: { ...userData.contact, linkedin: e.target.value } })
        }
      />
    </div>

    {/* Preview Button */}
    <button
      className="w-full py-3 mt-6 bg-cyan-500 text-white font-bold text-lg rounded-lg hover:bg-cyan-600 transition-all"
      onClick={() => setShowPreview(true)}
    >
      Preview Portfolio →
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default Editor;
