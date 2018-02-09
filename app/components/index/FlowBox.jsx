/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Collapsible from 'react-collapsible';

import CoreStyle from  'app/config/core/style';

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			border: '1px solid #c3c3c3',
			width: '50%',
			borderRadius: '2px',
			margin: '3%',
			cursor: 'pointer'
		}
	},
	HeadingSuccess: {
		[CoreStyle.PC.BREAKPOINT]:{
			backgroundColor: '#f3f3f3',
			color: '#00acff',
			padding: '2% 20%',
			fontSize: '20px',
			fontWeight: 'bold'
		}
	},
	HeadingFailure: {
		[CoreStyle.PC.BREAKPOINT]:{
			backgroundColor: '#f3f3f3',
			color: '#ff001e',
			padding: '2% 20%',
			fontSize: '20px',
			fontWeight: 'bold'
		}
	},
	Body: {
		[CoreStyle.PC.BREAKPOINT]:{
			fontSize: '15px',
			color: 'black'
		}
	},
	Function: {
		[CoreStyle.PC.BREAKPOINT]:{
			border: '1px solid #c3c3c3',
			backgroundColor: 'white',
			borderRadius: '2px',
			padding: '10%',
			fontWeight: '200'
		}
	},
	Pass: {
		[CoreStyle.PC.BREAKPOINT]:{
			border: 'none',
			backgroundColor: '#b2e6ff',
			borderRadius: '2px',
			padding: '10%',
			fontWeight: '200'
		}
	},
	Fail: {
		[CoreStyle.PC.BREAKPOINT]:{
			border: 'none',
			backgroundColor: '#ffc3ca',
			borderRadius: '2px',
			padding: '10%',
			fontWeight: '200'
		}
	},
	FeildName: {
		fontWeight: 'bold',
		padding: '5% 0%'
	},
	FlexBox: {
		display: 'inline-flex',
		width: '100%'
	},
	Half: {
		width: '50%',
		margin: '1%'
	}
})

export default class FlowBox extends React.Component {
	render() {
		let classRender = null;
		if(this.props.body(this.props.data)==true){
			classRender = css(Style.HeadingSuccess);
		} else {
			classRender = css(Style.HeadingFailure);
		}
		return (
			<div className={css(Style.Wrapper)}>
				<Collapsible 
					classParentString={classRender}
					contentInnerClassName={css(Style.Body)}
					trigger={this.props.title}
				>
					<div className={css(Style.Body)}>
						<div className={css(Style.FeildName)}>
							Function Executed
						</div>
						<div className={css(Style.Function)}>
							{this.props.body.toString()}
						</div>
						<div className={css(Style.FlexBox)}>
							<div className={css(Style.Half)}>
								<div className={css(Style.FeildName)}>
									Next rule if pass 
								</div>
								<div className={css(Style.Pass)}>
									{
										this.props.true_id
										?
										this.props.true_id
										:
										"EXIT"
									}
								</div>
							</div>
							<div className={css(Style.Half)}>
								<div className={css(Style.FeildName)}>
									Next rule if fail 
								</div>
								<div className={css(Style.Fail)}>
									{
										this.props.false_id
										?
										this.props.false_id
										:
										"EXIT"
									}
								</div>
							</div>
						</div>	
					</div>
				</Collapsible>
			</div>
		)
	}
}