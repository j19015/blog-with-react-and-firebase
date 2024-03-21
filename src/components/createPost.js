import { useState } from 'react';
import './createPost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const createPost = () => {
    console.log('title:', title);
    console.log('postText:', postText);
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button type="button" className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
