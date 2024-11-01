// 导入
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/common/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";

// 使用
function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/admin" element={
                <PrivateRoute>
                    <AdminDashboard />
                </PrivateRoute>
            } />
            <Route
                path="/create-post"
                element={
                    <PrivateRoute>
                        <CreatePostPage />
                    </PrivateRoute>
                }
            />
            {/* 其他路由 */}
        </Routes>
    );
}

export default RoutesConfig;