import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: {
        firstName: "",
        lastName: "",
        role: "",
        description: "",
        about: "",
        techStack: [],
        experience: [],
        projects: [],
        contact: {
            email: "",
            phone: "",
            linkedin: "",
            git: "",
            insta: "",
            x: ""
        }
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload };
        },

        // Tech Stack
        addTechStack: (state, action) => {
            state.userData.techStack.push(action.payload);
        },
        removeTechStack: (state, action) => {
            state.userData.techStack.splice(action.payload, 1);
        },

        // Experience
        addExperience: (state) => {
            state.userData.experience.push({
                company: "",
                position: "",
                duration: "",
                description: "",
                technologies:[]
            });
        },
        updateExperience: (state, action) => {
            const { index, field, value } = action.payload;
            state.userData.experience[index][field] = value;
        },
        removeExperience: (state, action) => {
            state.userData.experience.splice(action.payload, 1);
        },

        // Projects
        addProject: (state) => {
            state.userData.projects.push({
                title: "",
                description: "",
                image: "",
                technologies: []
            });
        },
        updateProject: (state, action) => {  // ✅ Now inside the reducers object
            const { index, field, value } = action.payload;
            state.userData.projects[index][field] = value;
        },
        removeProject: (state, action) => {
            state.userData.projects.splice(action.payload, 1);
        },

        // Contact
        updateContact: (state, action) => {
            const { key, value } = action.payload;
            state.userData.contact[key] = value;
        },
        updateProjectImage: (state, action) => {
            const { index, image } = action.payload;
        
            // Ensure the project at the given index exists before updating
            if (state.userData.projects[index]) {
                state.userData.projects[index].image = image;
            } else {
                console.error(`Project at index ${index} does not exist.`);
            }
        }
        
    }
});


export const { 
    setUserData, 
    addTechStack, 
    removeTechStack, 
    addExperience, 
    updateExperience, 
    removeExperience, 
    addProject, 
    updateProject, 
    removeProject, 
    updateContact,
    updateProjectImage 
} = userSlice.actions;

export default userSlice.reducer;
