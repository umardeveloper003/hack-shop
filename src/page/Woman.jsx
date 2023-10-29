import React, { useState } from 'react';
import Sidebar from '../components/SideBar/Sidebar';
import '../scss/_woman.scss';
const Woman = () => {
	return (
		<div className='woman'>
			<div className='container'>
				<div className='woman-block'>
					<Sidebar />
					<div className='woman-content'>
						<div className='woman-sort'>
							<div className='sort-button'>
								<h3>Sort by</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Woman;
