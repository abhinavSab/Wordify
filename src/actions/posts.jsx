import { fetchPosts } from "../api";

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await fetchPosts();
        dispatch({type: 'FETCH_ALL',
        payload:data
    });
        
    } catch (error) {
        console.log(error.message)
        
    }
}