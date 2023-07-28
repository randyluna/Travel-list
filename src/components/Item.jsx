import React from "react";

function Item({ item, onDeleteItem, onToggle }) {
	const handleDelete = () => {
		onDeleteItem(item.id);
	};

	const handleToggle = () => {
		onToggle(item.id);
	};

	return (
		<div>
			<li>
				<input type="checkbox" onClick={handleToggle} />
				<span style={item.packed ? { textDecoration: "line-through" } : {}}>
					{item.quantity} {item.description}
				</span>
				<button onClick={handleDelete}>❌</button>
			</li>
		</div>
	);
}

export default Item;