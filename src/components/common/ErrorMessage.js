// src/components/common/ErrorMessage.js
import React from 'react';
import { Alert } from 'react-bootstrap';

function ErrorMessage({ message }) {
    return (
        <Alert variant="danger">
            {message}
        </Alert>
    );
}

export default ErrorMessage;