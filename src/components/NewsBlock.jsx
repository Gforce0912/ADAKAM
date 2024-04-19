import React from "react";

function NewsBlock(props) {

    return (
      <div className="newsBlockWrap">
          <div className="newsBlockContent">
            <h3>{props.newsBlockTitle}</h3>
            <p>{props.newsBlockDate}</p>
          </div>
          <div className="newsBlockContentImg">
            <img src={props.newsBlockImg} alt="" />
          </div>
      </div>
    );
  }
  
  export default NewsBlock;