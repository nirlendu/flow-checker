/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import muiTheme from 'app/pages/mui-theme'
import Include from 'app/pages/Include'

import CoreNavbar from 'app/containers/navbar/CoreNavbar'
import Footer from 'app/containers/footer/Footer'

import Url from 'app/config/core/url'
import CoreStyle from  'app/config/core/style'

const Style = StyleSheet.create({
	ParentContainer : {
		[CoreStyle.PC.BREAKPOINT]:{
			overflowX: 'hidden',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			overflowX: 'hidden',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			overflowX: 'hidden',
		},
	},
	PageContainer : {
		[CoreStyle.PC.BREAKPOINT]:{
			paddingTop: '63px',
			width: '100%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			paddingTop: '57px',
			width: '100%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			paddingTop: '57px',
			width: '100%',
		},
	},
});

export default class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showChildren: false,
			prebootHTML: this.props.params.prebootHTML
		};
	}

	componentDidMount() {
		this.setState({ prebootHTML: '', showChildren: true })
	};

	render() {
		return (
			<div>
				<Include/>
				<MuiThemeProvider theme={muiTheme}>
					<div className={css(Style.ParentContainer)}>
						<CoreNavbar/>
							<div className={css(Style.PageContainer)}>
								{this.props.children}
							</div>
						<Footer/>
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}
