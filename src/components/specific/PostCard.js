// src/components/specific/PostCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                <Button variant="primary" as={Link} to={`/post/${post._id}`}>
                    阅读更多
                </Button>
            </Card.Body>
        </Card>
    );
}

export default PostCard;