// src/pages/LoginPage/LoginPage.js
import React, { useState } from 'react';
import { login } from '../../services/api';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data['access_token']);
                navigate('/');
            })
            .catch(err => {
                console.log(err);

                setError('用户名或密码错误');
            });
    };

    return (
        <div>
            <h2>登录</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>用户名</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="输入用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>密码</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="输入密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">登录</Button>
            </Form>
        </div>
    );
}

export default LoginPage;