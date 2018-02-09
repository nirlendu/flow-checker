/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from  'app/config/core/style'

import Flow from 'app/containers/index/Flow'

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '85%',
			margin: '2% auto',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
	},
})

// Each rule mapped to the ID
const flow = {
	"1":{
		id: 1,
		title: "Rule Title 1",
		body: function(obj){ return obj; },
		true_id: 3,
		false_id: 2
	},
	"2":{
		id: 2,
		title: "Rule Title 2",
		body: function(obj){ return !obj; },
		true_id: null,
		false_id: null
	},
	"3":{
		id: 3,
		title: "Rule Title 3",
		body: function(obj){ return !obj; },
		true_id: 1,
		false_id: 4
	},
	"4":{
		id: 4,
		title: "Rule Title 4",
		body: function(obj){ return !obj; },
		true_id: 1,
		false_id: 5
	},
	"5":{
		id: 5,
		title: "Rule Title 5",
		body: function(obj){ return obj; },
		true_id: 1,
		false_id: null
	}
}

export default class Driver extends React.Component {
	render() {
		return (
			<div className={css(Style.Wrapper)}>
				<Flow
					data={this.props.data}
					flow={flow}
				/>
			</div>
		)
	}
}
