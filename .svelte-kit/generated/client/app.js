export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/art": [4],
		"/art/cv": [5],
		"/art/damnthecomplexity": [6],
		"/art/deepstopwords": [7],
		"/art/ie": [8],
		"/art/labor": [9],
		"/art/mistakesandmemories": [10],
		"/art/rockets": [11],
		"/edu": [12],
		"/edu/digitaltheater": [13],
		"/portfolio": [14],
		"/writing": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';