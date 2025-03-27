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
        achievements: [], // ✅ Properly initialized as an empty array
        contact: {
            email: "",
            phone: "",
            linkedin: "",
            git: "",
            insta: "",
            x: ""
        }
    },
    portfolioData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = { 
                ...state.userData, 
                ...action.payload, 
                achievements: action.payload.achievements || state.userData.achievements // ✅ Preserve achievements
            };
        },

        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
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
                technologies: []
            });
        },
        updateExperience: (state, action) => {
            const { index, field, value } = action.payload;
            if (state.userData.experience[index]) {
                state.userData.experience[index][field] = value;
            }
        },
        removeExperience: (state, action) => {
            state.userData.experience.splice(action.payload, 1);
        },

        // Activities & Achievements
        addActivity: (state) => {
            if (!state.userData.achievements) {
                state.userData.achievements = []; // ✅ Ensure it's initialized
            }
            state.userData.achievements.push({
                date: "",
                title: "",
                organization: "",
                description: "",
            });
        },
        updateActivity: (state, action) => {
            const { index, field, value } = action.payload;
            if (state.userData.achievements[index]) {
                state.userData.achievements[index][field] = value;
            }
        },
        removeActivity: (state, action) => {
            state.userData.achievements.splice(action.payload, 1);
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
        updateProject: (state, action) => {
            const { index, field, value } = action.payload;
            if (state.userData.projects[index]) {
                state.userData.projects[index][field] = value;
            }
        },
        removeProject: (state, action) => {
            state.userData.projects.splice(action.payload, 1);
        },

        // Project Image
        updateProjectImage: (state, action) => {
            const { index, image } = action.payload;
            if (state.userData.projects[index]) {
                state.userData.projects[index].image = image;
            }
        },

        // Contact
        updateContact: (state, action) => {
            const { key, value } = action.payload;
            if (state.userData.contact.hasOwnProperty(key)) {
                state.userData.contact[key] = value;
            }
        },
    }
});

export const { 
    setUserData, 
    setPortfolioData,
    addTechStack, 
    removeTechStack, 
    addExperience, 
    updateExperience, 
    removeExperience, 
    addProject, 
    updateProject, 
    removeProject, 
    updateContact,
    updateProjectImage,
    addActivity,
    updateActivity,
    removeActivity
} = userSlice.actions;

export default userSlice.reducer;
