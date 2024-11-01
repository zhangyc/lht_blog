// src/pages/RegisterPage/RegisterPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const { username, email, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMsg('密码不匹配');
            return;
        }

        register({ username, email, password })
            .then((res) => {
                navigate('/login');
            })
            .catch((err) => {
                setErrorMsg(err.response.data.msg || '注册失败');
            });
    };

    return (
        <div className="container mt-5">
            <h2>注册</h2>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>用户名</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>邮箱</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>密码</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>确认密码</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
                        onChange={onChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    注册
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;