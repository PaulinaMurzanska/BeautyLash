import React from 'react';
import BaseTemplate from '../templates/BaseTemplate';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomePage from './HomePage';
import ServicesHub from './ServicesHub';
import AboutMe from './AboutMe';

function Root({ children }) {
	return (
		<BrowserRouter>
			<MainTemplate>
				<BaseTemplate>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path="uslugi/:id" element={<ServicesHub />} />
						<Route path="/o_nas" element={<AboutMe />} />

					</Routes>
				</BaseTemplate>
			</MainTemplate> 
		</BrowserRouter>
	);
}

export default Root;
