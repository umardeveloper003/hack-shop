import React from 'react';
import Header from '../header/Header';
import HeaderTop from '../HeaderTop/HeaderTop';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<>
			<HeaderTop />
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
