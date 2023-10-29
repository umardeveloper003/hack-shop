import React from 'react';
import './Section.scss';

const Section = () => {
	return (
		<div>
			<ul className='section-6-image'>
				<li>
					<img src='/public/assets/image.png' />
					<p>Top</p>
				</li>
				<li>
					<img src='/public/assets/image1.png' />
					<p>T-Shirts</p>
				</li>
				<li>
					<img src='/public/assets/image2.png' />
					<p>Caps</p>
				</li>
				<li>
					<img src='/public/assets/image3.png' />
					<p>Sandals</p>
				</li>
				<li>
					<img src='/public/assets/image4.png' />
					<p>Jackets</p>
				</li>
				<li>
					<img src='/public/assets/img5.png' />
					<p>Coats</p>
				</li>
			</ul>
		</div>
	);
};

export default Section;
