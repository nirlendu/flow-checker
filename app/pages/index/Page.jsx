/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react'
import {connect}  from 'react-redux'

import Index from 'app/pages/index/Index'
import Include from 'app/pages/index/Include'


class Page extends React.Component {
	render() {
		return (
			<div id="react-mount">
				<Include/>
				<Index
					data={this.props.data}
				/>
			</div>
		);
	}
}

const PageState = function(state){
	return {
		data: state.data
	}
};

Page = connect(
	PageState
)(Page);

module.exports = Page;
