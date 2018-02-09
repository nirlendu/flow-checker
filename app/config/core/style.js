/**
 * Copyright - Nirlendu Saha
 */

var Enum = require('enum');

var Style = {
	'COLOR' : {
		'RED' : '#ff2c47',
		'YELLOW' : '#ffbd4a',
		'WHITE' : 'white',
		'BLACK' : 'black',
		'GREY' : 'grey',
		'BLUE' : '#00a9ff',
		'GREEN' : '#00a99d',
	},
	'PC' : {
		'BREAKPOINT' : '@media only screen and (min-width: 1000px)',
		'TITLE_FONTSIZE' : '25px',
		'DESCRIPTION_FONTSIZE' : '20px',
		'SMALL_FONTSIZE' : '15px',
		'SECTION_MARGIN' : '15px',
	},
	'TAB' : {
		'BREAKPOINT' : '@media only screen and (min-width: 500px) and (max-width: 999px)',
		'TITLE_FONTSIZE' : '20px',
		'DESCRIPTION_FONTSIZE' : '17px',
		'SMALL_FONTSIZE' : '15px',
		'SECTION_MARGIN' : '15px',
	},
	'MOB' : {
		'BREAKPOINT' : '@media only screen and (max-width: 499px)',
		'TITLE_FONTSIZE' : '20px',
		'DESCRIPTION_FONTSIZE' : '17px',
		'SMALL_FONTSIZE' : '15px',
		'SECTION_MARGIN' : '15px',
		'SUBSECTION_MARGIN' : '7.5px',
	}
}

module.exports = new Enum(Style).toJSON();