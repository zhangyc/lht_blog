// src/pages/CreatePostPage/CreatePostPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../services/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 导入 Quill 的样式

function CreatePostPage() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const { title, content, tags } = formData;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const tagsArray = tags.split(',').map((tag) => tag.trim()).filter(tag => tag);

        createPost({ title, content, tags: tagsArray })
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                setErrorMsg(err.response?.data?.msg || '发表失败');
            });
    };

    return (
        <div className="container mt-5">
            <h2>发表新博客</h2>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>标题</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>内容</label>
                    <ReactQuill
                        value={content}
                        onChange={onContentChange}
                        modules={CreatePostPage.modules}
                        formats={CreatePostPage.formats}
                        placeholder="在这里输入内容..."
                    />
                </div>
                <div className="form-group">
                    <label>标签（逗号分隔，可选）</label>
                    <input
                        type="text"
                        name="tags"
                        className="form-control"
                        value={tags}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    发布
                </button>
            </form>
        </div>
    );
}

// 配置 Quill 模块和格式
CreatePostPage.modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image'],
        ['clean']
    ],
};

CreatePostPage.formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
];

export default CreatePostPage;