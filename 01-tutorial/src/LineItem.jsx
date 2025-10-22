import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
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
        aria-label={`Delete ${item.itemName}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
