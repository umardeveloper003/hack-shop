import React from 'react';
import './Header.scss';
import LogoHeader from '../../../public/assets/LogoHeader.svg';
import serch from '../../../public/assets/serch.svg';
import heart from '../../../public/assets/heart.svg';
import card from '../../../public/assets/card.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='Header'>
			<div className='container'>
				<div className='block_header'>
					<div className='LogoHeader'>
						<Link to='/'>
							<img src={LogoHeader} alt='' />
						</Link>
					</div>
					<ul className='nav_header'>
						<Link to='/woman'>
							<li>Women</li>
						</Link>
						<Link to='/man'>
							<li>Men</li>
						</Link>
						<Link to='/girls'>
							<li>Girls</li>
						</Link>
						<Link to='/boys'>
							<li>Boys</li>
						</Link>
						<Link to='/sale'>
							<li>Sale</li>
						</Link>
					</ul>
					<div className='serch_header'>
						<input type='text' placeholder='Search for products...' />
						<img src={serch} alt='' />
					</div>
					<div className='heart'>
						<img src={heart} alt='' />
						<h1>2</h1>
					</div>
					<h1 className='line_header'></h1>
					<div className='card'>
						<img src={card} alt='' />
						<h1>4</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
