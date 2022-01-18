// eslint-disable-next-line import/no-extraneous-dependencies
const lightTheme = require('prism-react-renderer/themes/github');

module.exports = {
	...lightTheme,
	styles: [
		...lightTheme.styles,
		{
			types: ['title'],
			style: {
				color: '#0550AE',
				fontWeight: 'bold',
			},
		},
		{
			types: ['parameter'],
			style: {
				color: '#953800',
			},
		},
		{
			types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
			style: {
				color: '#005CC5',
			},
		},
		{
			types: ['atrule', 'tag'],
			style: {
				color: '#22863A',
			},
		},
		{
			types: ['script'],
			style: {
				color: '#24292E',
			},
		},
		{
			types: ['operator', 'unit', 'rule'],
			style: {
				color: '#D73A49',
			},
		},
		{
			types: ['font-matter', 'string', 'attr-value'],
			style: {
				color: '#E3116C',
			},
		},
		{
			types: ['class-name'],
			style: {
				color: '#116329',
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: '#0550AE',
			},
		},
		{
			types: ['keyword'],
			style: {
				color: '#CF222E',
			},
		},
		{
			types: ['function'],
			style: {
				color: '#8250DF',
			},
		},
		{
			types: ['selector'],
			style: {
				color: '#6F42C1',
			},
		},
		{
			types: ['variable'],
			style: {
				color: '#E36209',
			},
		},
	],
};