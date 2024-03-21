import './home.css';

function Home() {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReactの勉強中です。頑張ってReactエンジニアとして活躍していきたいと思っています。
        </div>
        <div className="nameAndDeleteButton">
          <h3>takakou</h3>
          <button type="button">削除</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
