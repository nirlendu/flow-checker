/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import FlowBox from  'app/components/index/FlowBox'

import CoreStyle from  'app/config/core/style'

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	}
})

export default class Flow extends React.Component {
	render() {
		const flow = this.props.flow;
		const data = this.props.data;
		let pastExecutions = {};
		let executionFlow = [];
		
		// Entry of execution cycle
		let i =1;

		// CALCULATE THE FLOW
		do{
			// Check for cycles
			if(pastExecutions[i]){
				break;
			}
			
			// For cases where to be executed id doesn't exist
			if(!flow[i]){
				break;
			}

			// Execution of the function
			let res = flow[i].body(data);
			
			// Storing past executed steps
			pastExecutions[i]=true;
			
			// Pushing successful executions for rendering
			executionFlow.push(flow[i]);
			
			// Fetching the next execution id
			if(res){
				i = flow[i].true_id
			}else{
				i = flow[i].false_id
			}
			
			// Checking for end of execution
			if(i==null){
				break;
			}
		}while(true)
		
		let flowBoxList =  executionFlow.map(function(eachExecution) {
			return(
				<div key={eachExecution.id}>
					<FlowBox
						data={data}
						id={eachExecution.id}
						title={eachExecution.title}
						body={eachExecution.body}
						true_id={eachExecution.true_id}
						false_id={eachExecution.false_id}
					/>
				</div>
			)
		});
		return (
			<div className={css(Style.Wrapper)}>
				{flowBoxList}
			</div>
		)
	}
}