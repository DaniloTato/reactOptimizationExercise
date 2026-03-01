import React from "react";

/*
ListItem will ONLY re-render if the item changes
thanks to memo.
*/

const ListItem = React.memo(({ item, deleteItem, likeItem }) => {
  console.log("Render ListItem:", item.id);

  return (
    <li>
      {item.text} - Likes: {item.likes}

      <button onClick={() => likeItem(item.id)}>
        Like
      </button>

      <button onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </li>
  );
});

export default ListItem;