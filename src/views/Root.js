import React from 'react';
import BaseTemplate from '../templates/BaseTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomePage from './HomePage';
import ServicesHub from './ServicesHub';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Pricelist from './Pricelist';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import CookieConsentCustom from './Privacy/CookieConsent';
import Logotest from './Logotest';

function Root({ children }) {
	const consent = () => {
		if (document.cookie === 'CookieConsent=true') {
			return true;
		}
		if (
			document.cookie === 'CookieConsent=true' ||
			document.cookie === ''
		) {
			return false;
		}
	};
	const isConsentGiven = consent();

	return (
		<>
			{isConsentGiven === false && <CookieConsentCustom />}

			<BrowserRouter>
				<MainTemplate>
					<BaseTemplate>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route
								path='uslugi/:id'
								element={<ServicesHub />}
							/>
							<Route path='/o_mnie' element={<AboutMe />} />
							<Route path='/galeria' element={<Gallery />} />
							<Route path='/cennik' element={<Pricelist />} />
							<Route
								path='/polityka_prywatnosci'
								element={<PrivacyPolicy />}
							/>
							<Route path='/logo' element={<Logotest />} />
						</Routes>
					</BaseTemplate>
				</MainTemplate>
			</BrowserRouter>
		</>
	);
}

export default Root;
