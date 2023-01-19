import "./article.css";
function Article(props) {
  return (
    <div className="article">
      <img src={props.img} alt="" />
      <div className="details">
        <div className="heading">
          <span>{props.history}</span>
          <h3>{props.title}</h3>
        </div>
        <p>{props.read}</p>
      </div>
    </div>
  );
}
export default Article;
