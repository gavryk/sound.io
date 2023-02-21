import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonCard: React.FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={325}
			height={325}
			viewBox="0 0 325 325"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<rect x="81" y="333" rx="3" ry="3" width="362" height="6" />
			<rect x="81" y="355" rx="3" ry="3" width="246" height="6" />
			<rect x="81" y="375" rx="3" ry="3" width="60" height="7" />
			<rect x="165" y="375" rx="3" ry="3" width="60" height="7" />
			<rect x="259" y="75" rx="0" ry="0" width="1" height="12" />
			<rect x="16" y="4" rx="16" ry="16" width="295" height="225" />
			<rect x="15" y="244" rx="0" ry="0" width="265" height="11" />
			<rect x="15" y="267" rx="0" ry="0" width="210" height="10" />
		</ContentLoader>
	);
};
