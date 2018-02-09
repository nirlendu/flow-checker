/**
 * Copyright - Nirlendu Saha
 */

/*
 global require module
 */

import React from 'react'
import Helmet from 'react-helmet'

import Url from 'app/config/core/url'

export default class Include extends React.Component {
	
	render() {

		return (
			<Helmet
				htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
				title=""
				titleAttributes={{itemprop: "name", lang: "en"}}
				link={[]}
				script={[
					{type: "text/javascript", innerHTML: `				
					`}
				]}
				style={[
				  {
					type: "text/css", cssText: `
					/* latin */
					/* Font Settings */
					@font-face {
						font-family: 'Lusitana';
						font-style: normal;
						font-weight: 400;
						src: local('Lusitana'), url(https://fonts.gstatic.com/s/lusitana/v4/h_1ZjHXv2tOhJGwbefP69nYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
						unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
					}
					/* Disabling Scrollbar for Chrome/Safari */
					::-webkit-scrollbar { 
					    display: none;
					}
					/* General Universal Settings */
					body{
						margin: 0px;
						height: 100%;
						font-family: 'Lusitana', serif!important;
						font-weight: 400;
						line-height: 1.4;
						background-color: rgba(0,0,0,0);
					}
					/* Waiting Placeholder */
					@keyframes placeHolderShimmer{
						0%{
							background-position: -468px 0
						}
						100%{
							background-position: 468px 0
						}
					}
					`
				}
				]}
			/>
		);
	}
}