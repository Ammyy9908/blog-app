import axios from "axios"


async function getPosts(){
    try{
        const r = await axios.get(`http://localhost:5000/api/posts`)
        
        return r.data;
    }
    catch(e){
        return e.response?.data; 
    }
}

export default getPosts;