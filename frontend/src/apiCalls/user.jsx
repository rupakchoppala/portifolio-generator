import axiosInstance from "./index";
export const getLoggedUser=async()=>{
    try{
      const response=  await axiosInstance.get('/api/user/get-logged-user')
      return response.data;  
    }
    catch(error){
       return error;
    }
}
 export const getAllUsers=async()=>{
  try{
    const response=  await axiosInstance.get('/api/user/get-all-user')
    return response.data;
       
  }
  catch(error){
         return error;
  
}
 }
export const UploadProfilePic=async(image)=>{
  try{
    const response=  await axiosInstance.post('/api/user/upload-profile-pic',{image})
    return response.data;
  }
  catch(error){
         return error;
  }
}
export const createPortifolio=async(userData)=>{
    try{
   const response= await axiosInstance.post('/api/user/create-portifolio',userData)
   return response.data;
    }
    catch(err){
       return err;
    }
}
