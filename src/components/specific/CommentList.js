// src/components/specific/CommentList.js
import React from 'react';
import { Card } from 'react-bootstrap';

function CommentList({ comments }) {
    return (
        <div>
            {comments.map(comment => (
                <Card key={comment._id} className="mb-2">
                    <Card.Body>
                        <Card.Text>{comment.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default CommentList;