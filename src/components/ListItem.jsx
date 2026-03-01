import React from "react";

/*
React.memo here ensures:

ListItem will ONLY re-render if:
- item changes
- deleteItem reference changes
- likeItem reference changes

Since deleteItem and likeItem use useCallback,
their references stay stable.
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