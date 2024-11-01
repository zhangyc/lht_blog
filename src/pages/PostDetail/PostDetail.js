// src/pages/PostDetail/PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../../services/api';
import parse from 'html-react-parser'; // 安全地解析 HTML

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPosts(id)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    if (!post) {
        return <div>加载中...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>{post.title}</h2>
            <div className="text-muted">作者：{post.author_id}</div>
            <hr />
            <div>{parse(post.content)}</div>
            {/* 其他内容 */}
        </div>
    );
}

export default PostDetail;