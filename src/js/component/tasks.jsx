import React from "react";
import PropTypes from "prop-types";
export const Tasks = props => {
	return (
		<>
			<ul
				ref={props.refer}
				className="list-group list-group-item-action todos mx-auto text-light">
				{props.data
					? props.data.map((item, i) => (
							<li
								key={`${i}`}
								className="list-group-item d-flex justify-content-between align-items-center">
								<span>{item.label}</span>
								<span
									className="delete"
									onClick={e => props.deleteItem(e.target)}>
									×
								</span>
							</li>
					  ))
					: "Loading..."}
			</ul>
		</>
	);
};

Tasks.propTypes = {
	data: PropTypes.array,
	deleteItem: PropTypes.func,
	refer: PropTypes.object
};
