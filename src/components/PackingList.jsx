import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggle }) {
	return (
		<div className="list">
			<ol>
				{items.map((item) => (
					<Item
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggle={onToggle}
					/>
				))}
			</ol>
		</div>
	);
}

export default PackingList;