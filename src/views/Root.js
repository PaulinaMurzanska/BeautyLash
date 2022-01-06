import React from 'react';
import BaseTemplate from '../templates/BaseTemplate';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomePage from './HomePage';
import ServicesHub from './ServicesHub';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Pricelist from './Pricelist';

function Root({ children }) {
	return (
		<BrowserRouter>
			<MainTemplate>
				<BaseTemplate>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path="uslugi/:id" element={<ServicesHub />} />
						<Route path="/o_nas" element={<AboutMe />} />
						<Route path="/galeria" element={<Gallery />} />
						<Route path="/cennik" element={<Pricelist />} />
					</Routes>
				</BaseTemplate>
			</MainTemplate> 
		</BrowserRouter>
	);
}

export default Root;
