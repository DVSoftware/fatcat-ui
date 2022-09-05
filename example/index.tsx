import React from 'react';
import { CSSProp } from 'styled-components';

// Atoms
import { GlobalStyle } from 'fatcat-ui-library/components/Atoms';

// Fonts
import '../assets/fonts/silka/stylesheet.css';

// Themes
import { UIThemeProvider, FatCatTheme } from 'fatcat-ui-library/theme/theme';

const color = {
	newBlue: '#123456',
};
const space = {
	s10: '10px',
};

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		useMobileFirst: FatCatTheme['useMobileFirst']
		animation: FatCatTheme['animation']
		backgroundColor: FatCatTheme['backgroundColor']
		buttonColor: FatCatTheme['buttonColor']
		buttonSize: FatCatTheme['buttonSize']
		buttonVariant: FatCatTheme['buttonVariant']
		color: FatCatTheme['color']
		fontFamily: FatCatTheme['fontFamily']
		fontSize: FatCatTheme['fontSize']
		fontWeight: FatCatTheme['fontWeight']
		textStyle: FatCatTheme['textStyle']
		hover: FatCatTheme['hover']
		lineHeight: FatCatTheme['lineHeight']
		linkColor: FatCatTheme['linkColor']
		linkStyle: FatCatTheme['linkStyle']
		media: FatCatTheme['media']
		mediaMobile: FatCatTheme['mediaMobile']
		responsive: FatCatTheme['responsive']
		screenRatio: FatCatTheme['screenRatio']
		sectionWidth: FatCatTheme['sectionWidth']
		sideSpace: FatCatTheme['sideSpace'] | 't10'
		space: FatCatTheme['space'] | typeof space
		tableStyle: FatCatTheme['tableStyle']
		textColor: FatCatTheme['textColor'] & typeof color
		textSize: FatCatTheme['textSize']
		inputStyle: FatCatTheme['inputStyle']
		ollistStyle: FatCatTheme['ollistStyle']
		ullistStyle: FatCatTheme['ullistStyle']
		sectionLayout: CSSProp
	}
}

const Index: React.FC<{children: React.ReactNode}> = ({ children }) => {
	return (
		<UIThemeProvider theme={{ textColor: color, space }}>
			<GlobalStyle />
			{children}
		</UIThemeProvider>
	);
};

export default Index;
