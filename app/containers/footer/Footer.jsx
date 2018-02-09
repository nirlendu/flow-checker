/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react';
import { StyleSheet, css } from 'aphrodite'

import Url from 'app/config/core/url'
import CoreStyle from 'app/config/core/style'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '100%',
			backgroundColor: [CoreStyle.COLOR.BLACK],
			color: [CoreStyle.COLOR.WHITE],
			zIndex: '-999',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '100%',
			backgroundColor: [CoreStyle.COLOR.BLACK],
			color: [CoreStyle.COLOR.WHITE],
			zIndex: '-999',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '100%',
			backgroundColor: [CoreStyle.COLOR.BLACK],
			color: [CoreStyle.COLOR.WHITE],
			zIndex: '-999',
		},
	},
	Block : {
		[CoreStyle.PC.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			width: '100%',
			position : 'relative',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: '4%',
			paddingBottom: '4%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			position : 'relative',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: '5%',
			paddingBottom: '5%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			position : 'relative',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: '5%',
			paddingBottom: '5%',
		},
	},
	Container : {
		[CoreStyle.PC.BREAKPOINT]:{
			display: 'block',
			width: '33%',
			verticalAlign : 'top',
			textAlign: 'center',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			verticalAlign : 'top',
			textAlign: 'center',
			paddingTop: '5%',
			paddingBottom: '5%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			verticalAlign : 'top',
			textAlign: 'center',
			paddingTop: '5%',
			paddingBottom: '5%',
		},
	},
	LogoText : {
		[CoreStyle.PC.BREAKPOINT]:{
			paddingTop: '10%',
			width: '100%',
			fontSize: [CoreStyle.PC.SMALL_FONTSIZE],
			color: [CoreStyle.COLOR.GREY],
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			paddingTop: '10%',
			width: '100%',
			fontSize: [CoreStyle.PC.SMALL_FONTSIZE],
			color: [CoreStyle.COLOR.GREY],
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			paddingTop: '10%',
			width: '100%',
			fontSize: [CoreStyle.PC.SMALL_FONTSIZE],
			color: [CoreStyle.COLOR.GREY],
		},
	},
	Heart : {
		fontSize: '100%',
		color: 'red',
	}
})


class Logo extends React.Component {
	render() {
		var FooterImage = Url.Static.App.Endpoint + 'footer/.jpg';
		return (
			<div className={css(Style.Container)}>
				<div className={css(Style.LogoText)}>
					&#169; Nirlendu Saha
					<br/>All Rights Reserved
				</div>
				<div className={css(Style.LogoText)}>
					Designed and crafted with &nbsp;
					<span className={css(Style.Heart)}>&hearts;</span>
						&nbsp; in India
				</div>
			</div>
		);
	}
}


class Footer extends React.Component {
	render() {
		return (
			<div className={css(Style.Parent)}>
				<div className={css(Style.Block)}>
					<Logo/>
				</div>
			</div>
		);
	}
}

export default Footer;
