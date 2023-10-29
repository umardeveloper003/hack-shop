<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App  from './App'
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 1db23bc599faad245b73a75bad464499eb6d7063

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
);
