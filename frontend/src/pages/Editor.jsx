import React, { useState } from "react";
import { useEffect } from "react";
import Portfolio from "../components/preview";
import { useDispatch, useSelector } from 'react-redux';
import { 
  setUserData, 
  addTechStack, 
  removeTechStack, 
  addExperience, 
  updateExperience, 
  removeExperience, 
  addProject, 
  updateProject, 
  removeProject, 
  updateContact 
} from '../store/userSlice';

const Editor = () => {
  
const dispatch=useDispatch();
const { userData } = useSelector((state) => state.user);
  const [showPreview, setShowPreview] = useState(false);

const [newTech, setNewTech] = useState("");
const [newProject, setNewProject] = useState("");
const [newExperience, setNewExperience] = useState("");

const handleAddTechStack = () => {
  if (newTech.trim() !== "") {
    dispatch(addTechStack(newTech));
    setNewTech("");
}}


// const removeTechStack = (index) => {
//   const updatedTechStack = [...userData.techStack];
//   updatedTechStack.splice(index, 1);
//   setUserData({ ...userData, techStack: updatedTechStack });
// };
const handleRemoveTechStack = (index) => {
  dispatch(removeTechStack(index));
};
// const addProject = () => {
//   setUserData((prevData) => ({
//       ...prevData,
//       projects: [...prevData.projects, { title: "", description: "", images: [] }]
//   }));
// };


// const updateProject = (index, field, value) => {
//   const updatedProjects = [...userData.projects];
//   updatedProjects[index][field] = value;
//   setUserData({ ...userData, projects: updatedProjects });
// };
const handleAddProject = () => {
  if (newProject.trim() !== "") {
      dispatch(addProject());
      setNewProject("");
  }
};

const handleRemoveProject = (index) => {
  dispatch(removeProject(index));
};

  const handleaddExperience = () => {
    if (newExperience.trim() !== "") {
      dispatch(addExperience());
      setNewExperience("");
  }
  };
  const handleRemoveExperience=(index)=>{
    dispatch(removeExperience(index));
  }

  // const updateExperience = (index, value) => {
  //   const updatedExperiences = [...userData.experience];
  //   updatedExperiences[index] = value;
  //   setUserData({ ...userData, experience: updatedExperiences});
  // };
  

useEffect(() => {
  console.log("Updated userData:", userData);
}, [userData]);
useEffect(() => {
  console.log("Updated techStack:", userData.techStack);
}, [userData.techStack]);




  return (
    <div className={` ${showPreview ? "min-h-screen overflow-x-hidden" : "min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-neutral-200 p-6"}`}
    >
      {showPreview ? (
        <div className="relative w-full min-h-screen">
          {/* Back Button */}
          <button
            className="absolute z-[15] top-6 left-4 lg:left-[620px] px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => setShowPreview(false)}
          >
          Back to Editor
          </button>


          {/* Portfolio Component */}
          <div>
          <Portfolio userData={userData} />
          </div>
         
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Portfolio Generator</h2>

  <div className="space-y-6">
    {/* Name */}
    <div className="space-y-6">
    <div  className="flex gap-2 rounded-lg bg-gray-800">
    <input
      type="text"
      placeholder="first name"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.name}
      onChange={(e) => dispatch(setUserData({ ...userData, firstName: e.target.value }))}
    />
    <input
      type="text"
      placeholder="last name"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.name}
      onChange={(e) => dispatch(setUserData({ ...userData, lastName: e.target.value }))}
    />
    </div>
    </div>

    {/* Role */}
    <input
      type="text"
      placeholder="Your Role"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.role}
      onChange={(e) => dispatch(setUserData({ ...userData, role: e.target.value }))}
    />
    {/* description or summary of your job */}
    <textarea
      placeholder="summary or objective"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.description}
      onChange={(e) => dispatch(setUserData({ ...userData, description: e.target.value }))}
    />

    {/* About */}
    <textarea
      placeholder="About You"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.about}
      onChange={(e) => dispatch(setUserData({ ...userData, about: e.target.value }))}
    />

    {/* Tech Stack */}
   
  <div className="space-y-4">
  <label className="text-cyan-400 font-semibold">Tech Stack</label>
  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Add Tech Stack"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={newTech}
      onChange={(e) => setNewTech(e.target.value)}
    />
    <button
      className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
      onClick={handleAddTechStack}
    >
      Add
    </button>
  </div>
  <div className="flex flex-wrap gap-2">
    {userData.techStack.map((tech, index) => (
      <div key={index} className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg">
        <span>{tech}</span>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => handleRemoveTechStack(index)}
        >
          ×
        </button>
      </div>
    ))}
  </div>
</div>



    {/* Experience */}
    <div className="space-y-4">
      <label className="text-cyan-400 font-semibold">Experience</label>
      {userData.experience.map((experience, index) => (
       <div key={index} className="grid grid-cols-4 gap-3 p-3 rounded-lg bg-gray-800">
       <input
           type="text"
           placeholder={`Company`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={experience.company}
           onChange={(e) => dispatch(updateExperience({index, field: 'company', value:e.target.value}))}
       />
        <input
           type="text"
           placeholder={`position`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={experience.position}
           onChange={(e) =>
            dispatch(updateExperience({index, field: 'position', value:e.target.value}))}
       />
       <input
           type="text"
           placeholder={`duration:2022-23`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={experience.duration}
           onChange={(e) =>
            dispatch(updateExperience({index, field: 'duration', value:e.target.value}))}
       />
       <textarea
           placeholder={`Description`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={experience.description}
           onChange={(e) => dispatch(updateExperience({index, field: 'description', value:e.target.value}))}
       />
        <input
                type="text"
                placeholder="Technologies (comma-separated)"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={experience?.technologies?.join(", ")}
                onChange={(e) =>
                    dispatch(updateExperience({ index, field: 'technologies', value: e.target.value.split(",") }))
                }
            />
        <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleRemoveExperience(index)}
            >
                Remove
            </button>
      
   </div>
      ))}
      <button
        className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
        onClick={()=>dispatch(addExperience())}
      >
        + Add Experience
      </button>
    </div>
    {/* <textarea
      placeholder="Your Experience"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.experience}
      onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
    /> */}

    {/* Projects */}
 {/* Projects */}
 <div className="space-y-4 mt-6">
    <label className="text-cyan-400 font-semibold">Projects</label>
    {userData.projects.map((project, index) => (
        <div key={index} className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-gray-800">
            <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={project.title}
                onChange={(e) => dispatch(updateProject({ index, field: 'title', value: e.target.value }))}
            />
            <textarea
                placeholder="Description"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={project.description}
                onChange={(e) => dispatch(updateProject({ index, field: 'description', value: e.target.value }))}
            />
            <input
                type="file"
                placeholder="Image URLs (comma-separated)"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={project.images.join(", ")}
                onChange={(e) =>
                    dispatch(updateProject({ index, field: 'images', value: e.target.value.split(",") }))
                }
            />
            
            {/* Technologies Input */}
            <input
                type="text"
                placeholder="Technologies (comma-separated)"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={project.technologies.join(", ")}
                onChange={(e) =>
                    dispatch(updateProject({ index, field: 'technologies', value: e.target.value.split(",") }))
                }
            />

            <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleRemoveProject(index)}
            >
                Remove
            </button>
        </div>
    ))}

    <button
        className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
        onClick={() => dispatch(addProject())}
    >
        + Add Project
    </button>
</div>




    {/* Contact */}
    <div className="space-y-4">
    <label className="text-cyan-400 font-semibold">Contact Information</label>
    <div className="grid grid-cols-2 gap-3">
        {Object.keys(userData.contact).map((key) => (
            <input
                key={key}
                type={key === "phone" ? "tel" : "text"}  // Phone input as type="tel"
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
                value={userData.contact[key]}
                onChange={(e) =>
                    dispatch(updateContact({ key: key, value: e.target.value }))
                }
            />
        ))}
    </div>
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
