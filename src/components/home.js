import { useEffect, useState } from 'react';
import './home.css';
/* eslint-disable object-curly-newline */
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function Home() {
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    const data = await getDocs(collection(db, 'posts'));
    setPostList(data.docs.map((document) => ({ ...document.data(), id: document.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    if (auth.currentUser.uid !== postList.find((post) => post.id === id).author.id) {
      return;
    }
    await deleteDoc(doc(db, 'posts', id));
    getPosts();
  };

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            {post.author.id === auth.currentUser?.uid && (
              <button type="button" onClick={() => handleDelete(post.id)}>
                削除
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
