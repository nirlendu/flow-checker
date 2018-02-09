/**
 * Copyright - Nirlendu Saha
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import url from 'app/config/core/url'
import CoreStyle from 'app/config/core/style'

const Style = StyleSheet.create({
	Parent: {
		[CoreStyle.PC.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			width: '100%',
			borderRadius: '0px',
			marginBottom: '0px',
			zIndex: '10',
			fontSize: '20px',
			paddingTop: '0.5%',
			backgroundColor: 'white',
			border: 'none',
			fontWeight: 'bold',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			width: '100%',
			borderRadius: '0px',
			zIndex: '10',
			fontSize: '20px',
			backgroundColor: [CoreStyle.COLOR.WHITE],
			border: 'none',
			fontWeight: 'bold',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			width: '100%',
			borderRadius: '0px',
			marginBottom: '0px',
			zIndex: '10',
			fontSize: '20px',
			paddingTop: '1%',
			paddingBottom: '1%',
			backgroundColor: [CoreStyle.COLOR.WHITE],
			border: 'none',
			fontWeight: 'bold',
		},
	}
})

export default class CoreNavbar extends React.Component {
	
	render() {
		return (
			<header>
				<div className="inner">
					<span>
					<nav className={css(Style.Parent)}>
						&nbsp;&nbsp;Friendsurance
					</nav>
					</span>
				</div>
			</header> 
		);
	}
}
