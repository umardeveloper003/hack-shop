import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../scss/_woman.scss';
const Woman = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='woman'>
			<div className='container'>
				<div className='woman-block'>
					<Sidebar />
					<div className='woman-content'>
						<div className='woman-sort'>
							<div className='sort-button'>
								<h3>Sort by</h3>
								<div className='dropdown'>
									<button className='dropbtn' onClick={() => toggleDropdown()}>
										Dropdown
									</button>
									{isOpen && (
										<div className='dropdown-content'>
											<a href='#'>Item 1</a>
											<a href='#'>Item 2</a>
											<a href='#'>Item 3</a>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Woman;
