import { FaTrash } from "react-icons/fa";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="item">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <label
            onDoubleClick={() => handleCheck(item.id)}
            style={item.checked ? { textDecoration: "line-through" } : null}
          >
            {item.itemName}
          </label>
          <FaTrash
            role="button"
            tabIndex={0}
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
