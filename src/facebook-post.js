import React from 'react';

function Post (props) {
    return (
        <div className="post">
            <h2 className="user-post">{props.author}</h2>
            <p className="content-of-post">{props.description}</p>
            <button className="like-button">Like</button>
        </div>
    );
}

export default Post;
