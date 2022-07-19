import React from 'react';
import { UIThemeProvider } from '../src/theme/theme';
import GlobalStyle from '../src/components/Atoms/GlobalStyle';

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['Setup', 'Element Props', 'Basic Elements'],
		},
	},
	previewTabs: {
		canvas: {
			hidden: true,
		},
	},
	viewMode: 'docs',
}

export const decorators = [
	(Story) => (
		<UIThemeProvider>
			<GlobalStyle />
			<Story />
		</UIThemeProvider>
	),
];

