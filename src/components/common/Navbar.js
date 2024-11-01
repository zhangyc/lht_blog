// src/components/common/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">在错误中寻路</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">首页</Nav.Link>
                    {isAuthenticated ? (
                        <>
                            <Nav.Link as={Link} to="/admin">管理后台</Nav.Link>
                            <Nav.Link as={Link} to="/create-post">
                                发表博客
                            </Nav.Link>
                            <Nav.Link onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/';
                            }}>退出</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">登录</Nav.Link>
                            <Nav.Link as={Link} to="/register">注册</Nav.Link>

                        </>

                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;