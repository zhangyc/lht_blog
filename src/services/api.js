// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

axios.defaults.baseURL = API_URL;

// 设置请求拦截器，添加 Authorization 头
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 用户认证
export function login(data) {
    return axios.post('/auth/login', data);
}

export function register(data) {
    return axios.post('/auth/register', data);
}

// 文章相关
export function getPosts() {
    return axios.get('/posts/',);
}

export function getPostById(id) {
    return axios.get(`/posts/${id}`);
}

export function createPost(data) {
    return axios.post('/posts/', data,{
        "Content-Type": "application/json",
    });
}

// 评论相关
export function getCommentsByPostId(postId) {
    return axios.get(`/comments/${postId}`);
}

export function addComment(postId, data) {
    return axios.post(`/comments/${postId}`, data);
}