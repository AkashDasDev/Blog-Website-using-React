import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_640.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Welcome to My Blog Website</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        To make your document look professionally produced, Word provides
        header, footer, cover page, and text box designs that complement each
        other. For example, you can add a matching cover page, header, and
        sidebar. Click Insert and then choose the elements you want from the
        different galleries. Themes and styles also help keep your document
        coordinated. When you click Design and choose a new Theme, the pictures,
        charts, and SmartArt graphics change to match your new theme. When you
        apply styles, your headings change to match the new theme.Save time in
        Word with new buttons that show up where you need them. To change the
        way a picture fits in your document, click it and a button for layout
        options appears next to it. When you work on a table, click where you
        want to add a row or a column, and then click the plus sign.
      </p>
    </div>
  );
}
