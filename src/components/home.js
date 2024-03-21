import { useEffect, useState } from 'react';
import './home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
      setPostList(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div key={post.title} className="postContents">
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            <button type="button">削除</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
