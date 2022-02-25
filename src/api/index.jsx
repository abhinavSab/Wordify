import axios from "axios"

export const fetchPosts=()=> axios.get("https://gorest.co.in/public/v2/posts")
