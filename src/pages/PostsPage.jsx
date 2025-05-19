import React from 'react';
import PostsList from '../components/PostsList';

function PostsPage() {
    return (
        <div className='container'>
            <h1>Lista dei Post</h1>
            <PostsList />
        </div>
    );
}

export default PostsPage;