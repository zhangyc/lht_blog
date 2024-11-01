// src/components/specific/PostList.js
import React from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
    console.log(posts);
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
}

export default PostList;