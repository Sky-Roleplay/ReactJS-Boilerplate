///////////////////////////
///// Imports /////
///////////////////////////
import React from 'react';
import { Nui } from '../Nui/NuiHandler';
import { store } from '../../index';
import Default from '../Default/Main';
import './Main.scss';

///////////////////////////
///// Nui Events /////
///////////////////////////
Nui.registerEmit('toggle', data => {
	store.dispatch({ type: 'toggle', value: data.value });
});

///////////////////////////
///// Main /////
///////////////////////////
export default function App() {
	return (
		<section className='mainWindow'>
			<Default />
		</section>
	);
}
