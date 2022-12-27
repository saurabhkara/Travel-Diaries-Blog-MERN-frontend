import axios from 'axios';

export async function getAllpost(){
    try {
        const res = await axios.get('/post');
        if(res.status === 200){
            return res.data.allPost;
        }
    } catch (error) {
        return "Network Error"
    }
}


export async function sendAuthRequest(isSignup,data){
    try {
        const res = await axios.post(`/user/${isSignup?"signup":"login"}`,{
          name:data.name? data.name:"",
          email:data.email,
          password:data.password  
        });

        if(res.status === 200 ||201){
            return res.data;
        }
    } catch (error) {
        return console.log(error);
    }
}


export const addPost= async (data) =>{
    try {
        const res = await axios.post('/post',{
            title:data.title,
            description:data.description,
            image:data.imageUrl,
            date:data.date,
            location:data.location,
            user:localStorage.getItem('userId')
        })
        if(res.status ===201){
            return res.data;
        }else{
            return console.log('Error Occured');
        }
    } catch (error) {
       return error;
    }
}


export const getPost = async (id)=>{
    try {
       const res = await axios.get(`/post/${id}`);
        if(res.status===200){
            return res.data;
        }else{
            return console.log('Error');
        }
    } catch (error) {
      return console.log('Error happend') 
    }   
}

export const updatePost = async (data, id)=>{
    console.log(data);
    console.log(id);
    try {
       const res = await axios.put(`/post/${id}`,{
            title:data.title,
            description:data.description,
            location:data.location,
            image:data.imageUrl
       });
       console.log(res);
    } catch (error) {
       return console.log('Error happend');
    }
}

export const deletePost = async (id) =>{
    console.log('id of post', id);
    try {
        const res = await axios.delete(`/post/${id}`);
        console.log(res);
        if(res.status ===200){
            return res.data;
        }else{
            console.log('Error occured');
        }
    } catch (error) {
       return  console.log(Error);
    }
}

export const getUserDetail = async (id)=>{
    try {
        const res = await axios.get(`/user/${id}`);
        if(res.status ===200){
            
            return res.data;
        }else{
            return console.log("Unable to fetch the data");
        }

    } catch (error) {
        return console.log('error in catch block',error)
    }
}

