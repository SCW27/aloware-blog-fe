import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
export const getPost = async (postId) => {
  return axios.get(`${baseUrl}/post/${postId}`);
};

export const addComment = async (name, comment, parent_id, blog_id) => {
  return axios.post(`${baseUrl}/comment`, {
    name,
    comment,
    parent_id,
    blog_id,
  });
};
