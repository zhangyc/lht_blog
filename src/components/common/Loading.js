// src/components/common/Loading.js
import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" role="status">
                <span className="sr-only">加载中...</span>
            </Spinner>
        </div>
    );
}

export default Loading;