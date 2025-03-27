import React, { useState } from "react";
import { useEffect } from "react";
import Portfolio from "../components/preview";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast";
import LogoutButton from "../components/Logout";
import { useLocation } from "react-router-dom";
import { 
  setUserData, 
  addTechStack, 
  removeTechStack, 
  addExperience, 
  updateExperience, 
  removeExperience, 
  addProject,
  removeProject, 
  updateContact,
  updateProjectImage ,
  addActivity,
  updateActivity,
  removeActivity
} from '../store/userSlice';
import { updateProject } from "../store/userSlice";
import axiosInstance from "../apiCalls";

const Editor = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const { userData } = useSelector((state) => state.user);
const [showPreview, setShowPreview] = useState(false);
const [newTech, setNewTech] = useState("");
const [typeSelect,setTypeSelect]=useState(false);
const location = useLocation();
const hasPortfolio = location.state?.hasPortfolio; 

useEffect(() => {
  const userId = localStorage.getItem("id");
  if (!userData || !userData.firstName) {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/api/user/get-portfolio/${userId}`);
        if (response.data) {
          const cleanData = {
            ...response.data.data,
            profilePic: response.data.profilePic || '', // Ensures empty if undefined
            aboutPic: response.data.aboutPic || '' // Ensures empty if undefined
          };
          dispatch(setUserData(cleanData));
          console.log(userData);
          console.log("dispatched data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }
}, [dispatch]);


const onFileSelect = (index) => (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
      if (index !== undefined) {
          dispatch(updateProjectImage({ index, image: reader.result }));
      } else {
          console.error("Index is undefined in onFileSelect.");
      }
  };

  if (file) {
      reader.readAsDataURL(file); // Convert to Base64
  }
};
const onImageSelect = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
      
          dispatch(setUserData({ ...userData, profilePic: reader.result }));
  };

  if (file) {
      reader.readAsDataURL(file); // Convert to Base64
  }
};
const onaboutSelect = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
      
          dispatch(setUserData({ ...userData, aboutPic: reader.result }));
  };

  if (file) {
      reader.readAsDataURL(file); // Convert to Base64
  }
};



// Upload Function
// const updateProfilePic = async () => {
//   try {
//       if (!image) {
//           toast.error("Please select an image first.");
//           return;
//       }

//       const userId = localStorage.getItem("id");
//       if (!userId) {
//           toast.error("User ID not found. Please log in again.");
//           return;
//       }

//       const formData = new FormData();
//       formData.append("image", image); 
//       formData.append("userId", userId);

//       // ✅ Log `FormData` content
//       for (let pair of formData.entries()) {
//           console.log(`${pair[0]}:`, pair[1]);
//       }

//       const response = await axiosInstance.post(
//           `/api/user/upload-project-pic`,
//           formData,
//           { headers: { 'Content-Type': 'multipart/form-data' } } // <-- Important for `axios`
//       );
//       if (response.data.success) {
//           toast.success(response.data.message);
//       } else {
//           toast.error(response.data.message);
//       }
//   } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || err.message);
//   }
// };
const handleAddTechStack = () => {
  if (newTech.trim() !== "") {
    dispatch(addTechStack(newTech));
    setNewTech("");
}}
const handleRemoveTechStack = (index) => {
  dispatch(removeTechStack(index));
};

const handleRemoveProject = (index) => {
  dispatch(removeProject(index));
};

  const handleRemoveExperience=(index)=>{
    dispatch(removeExperience(index));
  }
  const handleRemoveActivity=(index)=>{
    dispatch(removeActivity(index));
  }


// useEffect(() => {
//   console.log("Updated userData:", userData);
// }, [userData]);
useEffect(() => {
  console.log("Updated techStack:", userData.techStack);
}, [userData.techStack]);

const formSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await axiosInstance.post(
       "/api/user/update-portfolio",
          userData
      );
      // Use `response.data.success` instead of `response?.success`
      if (response.data?.success) {
          toast.success(response.data?.message);
          navigate('/preview');
      } else {
          toast.error(response.data?.message || "Unexpected error occurred");
      }

  } catch (error) {
      console.error("Error during signup:", error);
      toast.error(`Error: ${error.response?.data?.message || error.message || "Something went wrong"}`);
  }
}
const formSubmit2 = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
      const response = await axiosInstance.post(
       "/api/user/create-portifolio",
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in headers
              "Content-Type": "application/json",
            },
          }
      );
      // Use `response.data.success` instead of `response?.success`
      if (response.data?.success) {
          toast.success(response.data?.message);ss
          navigate('/preview');
      } else {
          toast.error(response.data?.message || "Unexpected error occurred");
      }

  } catch (error) {
      console.error("Error during signup:", error);
      toast.error(`Error: ${error.response?.data?.message || error.message || "Something went wrong"}`);
  }
}





  return (
    <div className={` ${showPreview ? "min-h-screen overflow-x-hidden font-inter" : "min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-neutral-200 p-6 font-inter"}`}
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
       
       <div className="flex flex-col gap-2 justify-center items-center "> <LogoutButton/>
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
         
  <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Portfolio Generator</h2>

  <div className="space-y-6">
    {/* Name */}
    <div className="space-y-6">
    <div  className="flex gap-2 rounded-lg bg-gray-800">
      <div>
    <label className="text-cyan-400 font-semibold">First Name</label>
    <input
      type="text"
      placeholder="first name"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.firstName}
      onChange={(e) => dispatch(setUserData({ ...userData, firstName: e.target.value }))}
    />
    </div>
    <div>
    <label className="text-cyan-400 font-semibold">Last Name</label>
    <input
      type="text"
      placeholder="last name"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.lastName}
      onChange={(e) => dispatch(setUserData({ ...userData, lastName: e.target.value }))}
    />
    </div>
    <div>
    <label className="text-cyan-400 font-semibold">User Image</label>
     <input
       type="file"
       accept="image/*"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      name="profilePic"
      onChange={onImageSelect}
    />
    </div>

    </div>
    </div>

    {/* Role */}
    <label className="text-cyan-400 font-semibold">Role</label>
    <input
      type="text"
      placeholder="Your Role"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.role}
      onChange={(e) => dispatch(setUserData({ ...userData, role: e.target.value }))}
    />
    {/* description or summary of your job */}
    <label className="text-cyan-400 font-semibold">Objective</label>
    <textarea
      placeholder="summary or objective"
      className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.description}
      onChange={(e) => dispatch(setUserData({ ...userData, description: e.target.value }))}
    />

    {/* About */}
    
   
    
    <div  className="flex gap-2 rounded-lg bg-gray-800">
      <div>
    <label className="text-cyan-400 font-semibold">AboutMe</label>
    <textarea
      placeholder="About You"
      className="lg:w-[500px] w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      value={userData.about}
      onChange={(e) => dispatch(setUserData({ ...userData, about: e.target.value }))}
    />
    </div>
    <div>
    <label className="text-cyan-400 font-semibold">About Image</label>
    <input
       type="file"
       accept="image/*"
      className="w-full p-6 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
      name="aboutPic"
      onChange={onaboutSelect}
    />
    </div>
  </div>
 
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
    {/* Achievements And Activities */}
    <div className="space-y-4">
      <label className="text-cyan-400 font-semibold">Achievements/Activities</label>
      {userData?.achievements?.map((activity, index) => (
       <div key={index} className="grid grid-cols-4 gap-3 p-3 rounded-lg bg-gray-800">
       <input
           type="text"
           placeholder={`Date`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={activity.date}
           onChange={(e) => dispatch(updateActivity({index, field: 'date', value:e.target.value}))}
       />
        <input
           type="text"
           placeholder={`title`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={activity.title}
           onChange={(e) =>
            dispatch(updateActivity({index, field: 'title', value:e.target.value}))}
       />
       <input
           type="text"
           placeholder={`organiZation`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={activity.organization}
           onChange={(e) =>
            dispatch(updateActivity({index, field: 'organization', value:e.target.value}))}
       />
 
       <textarea
           placeholder={`Description`}
           className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
           value={activity.description}
           onChange={(e) => dispatch(updateActivity({index, field: 'description', value:e.target.value}))}
       />
       
        <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleRemoveActivity(index)}
            >
                Remove
            </button>
      
   </div>
      ))}
      <button
        className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
        onClick={()=>dispatch(addActivity())}
      >
        + Add Achievements/Activities
      </button>
    </div>

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
                onChange={(e) => 
                  dispatch(updateProject({ index, field: 'title', value: e.target.value }))}
            />
            <textarea
                placeholder="Description"
                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
                value={project.description}
                onChange={(e) => 
                  dispatch(updateProject({ index, field: 'description', value: e.target.value }))}
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
           <input
    type="file"
    name="image"
    accept="image/*"
    className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-lg"
    onChange={onFileSelect(index)}
/>

{/* <button
    className="upload-img-btn border-[2px] text-black w-[100px] rounded-lg bg-green-200 mt-[30px] hover:bg-orange-500"
    onClick={updateProfilePic}
>
    Upload
</button> */}

            
           

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
  <div className="flex gap-2">
  {hasPortfolio ? (
    // Show Update Portfolio button if user has a portfolio
    <button
      className="w-full py-3 mt-6 bg-cyan-500 text-white font-bold text-lg rounded-lg hover:bg-cyan-600 transition-all"
      onClick={(e) => {
        setTypeSelect(!typeSelect);
        formSubmit(e);
      }}
    >
      Update Portfolio
    </button>
  ) : (
    // Show Create Portfolio button if user has no portfolio
    <button
      className="w-full py-3 mt-6 bg-cyan-500 text-white font-bold text-lg rounded-lg hover:bg-cyan-600 transition-all"
      onClick={(e) => {
        setTypeSelect(!typeSelect);
        formSubmit2(e);
      }}
    >
      Create Portfolio
    </button>
  )}
</div>

</div>
</div>

      )}
     
    </div>
    
  );
};

export default Editor;
