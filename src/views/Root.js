import React from 'react';
import BaseTemplate from '../templates/BaseTemplate';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomePage from './HomePage';
import ServicesHub from './ServicesHub';

function Root({ children }) {
	return (
		<BrowserRouter>
			<MainTemplate>
				<BaseTemplate>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path="uslugi/:id" element={<ServicesHub />} />
					</Routes>
				</BaseTemplate>
			</MainTemplate> 
		</BrowserRouter>
	);
}

export default Root;
