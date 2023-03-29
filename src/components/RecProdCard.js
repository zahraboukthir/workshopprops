import React from "react";

const RecProdCard = ({ prod, funct }) => {
  return (
    <tr>
      <td>{prod.rate}</td>
      <td>
        <img src={prod.imgSrc} alt="" width={"50px"} />
      </td>
      <td>
        <button onClick={() => funct(prod.name)}>{prod.name}</button>
      </td>
      <td>
        {prod.comments.map((comment, i) => (
          <div key={i}>
            <p>{comment.nameuser} :</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default RecProdCard;
