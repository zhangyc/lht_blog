// src/pages/HomePage/HomePage.js
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/api';
import PostList from '../../components/specific/PostList';
import Loading from '../../components/common/Loading';
import PaginationComponent from '../../components/common/Pagination';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5; // 每页显示的文章数

    useEffect(() => {
        getPosts()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);

                setLoading(false);
                // 处理错误
            });
    }, []);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <PostList posts={currentPosts} />
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
}

export default HomePage;