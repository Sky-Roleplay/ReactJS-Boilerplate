///////////////////////////
///// Imports /////
///////////////////////////
import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import './Main.scss';
import { Button } from '@mui/material';
import { Nui } from '../Nui/NuiHandler';


///////////////////////////
///// Default /////
///////////////////////////
export default function Default() {
	console.log('env is:', process.env.NODE_ENV)
	const values = useSelector(state => state.Default);
	function processClick() {
		console.log('clicked')
		Nui.send('toggle', false)
	}
	return (
		<div
			className={clsx('container', {
				'container-Show': values.isShowing,
			})}
		>
			<Button variant="contained" onClick={processClick}>Contained</Button>	
		</div>
	);
}
