/**
 * Copyright - Nirlendu Saha
 */

const CoreNavbarCss = `
a{
	text-decoration: none!important;
	color: none!important;
}
a:hover{
	text-decoration: none!important;
	color: none!important;
}
.well {
	background-color: white!important;
}
* {
	box-sizing: border-box;
}

header {
	background: white;
	height: 50px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
}

.inner {
	position: relative;
}

.logo {
	text-decoration: none;
	color: #777;
	font-weight: 800;
	font-size: 30px;
	line-height: 40px;
}

nav > ul {
	float: right;
}

nav > ul > li {
	text-align: center;
	line-height: 40px;
	margin-left: 70px;
}

nav > ul li ul li {
	width: 100%;
	text-align: left;
}

nav ul li:hover {
	cursor: pointer;
	position: relative;
}
nav ul li:hover > ul {
	display: block;
}
nav ul li:hover > a {
	color: #777;
}
nav > ul > li > a {
	cursor: pointer;
	display: block;
	outline: none;
	width: 100%;
	text-decoration: none;
}

nav > ul > li {
	float: left;
}
nav a {
	color: black;
}
nav > ul li ul {
	display: none;
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	z-index: 2000;
}
nav > ul li ul li > a {
	text-decoration: none;
}

.checkbox-navbar, .label-navbar {
	 display: none;
}

@media screen and (max-width: 768px) {

	nav ul {
		display: none;
	}

	.label-navbar {
		display: block;
		background: white;
		width: 40px;
		height: 40px;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 10px;
	}
  
	.label-navbar:after{
		content:'';
		display: block;
		width: 30px;
		height: 5px;
		background: #777;
		margin: 7px 5px;
		box-shadow: 0px 10px 0px #777, 0px 20px 0px #777
	}

	.checkbox-navbar:checked ~ ul {
		display: block;
		z-index: 9999;
		position: absolute;
		right: 0px;
		left: 0px;
		padding: 0px;
		top: 35px;
	}

	nav a {
		color: #777;
	}

	nav ul li {
		display: block;
		float: none;
		width: 100%;
		text-align: left;
		background: white;
		text-indent: 20px;
	}

	nav > ul > li {
		margin-left: 0px;
	}

	nav > ul li ul li {
		display: block;
		float: none;
	}
  
	nav > ul li ul {
		display: block;
		position: relative;
		width: 100%;
		z-index: 9999;
		float: none;
	}
}`

module.exports = CoreNavbarCss;
