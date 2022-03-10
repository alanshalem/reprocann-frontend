import React from 'react';

const Error = ({ children }) => {
	return (
		<div className="text-red-600 px-1 py-2">
			<strong className="font-bold">{children}</strong>
		</div>
	);
};

export default Error;
