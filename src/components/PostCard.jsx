import React from 'react';

function PostCard({ post }) {
    return (
        <div className='container'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Categoria: {post.category}</p>
        </div>
    );
}

export default PostCard;