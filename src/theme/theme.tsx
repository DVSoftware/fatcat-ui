import React from 'react';
import { ThemeProvider } from 'styled-components';
import { isObjectEmpty, deepmerge } from '../utils/object-helpers';

// Definitions
import {
	ANIMATIONS,
	BACKGROUND_COLOR,
	BUTTON_COLOR,
	BUTTON_SIZE,
	BUTTON_VARIANT,
	COLOR,
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	TEXT_STYLE,
	INPUT_STYLE,
	LINE_HEIGHT,
	LINK_COLOR,
	LINK_STYLE,
	MEDIA,
	OLLIST_STYLE,
	SCREEN_RATIO,
	SECTION_WIDTH,
	SPACE,
	TABLE_STYLE,
	TEXT_COLOR,
	ULLIST_STYLE,
	MEDIA_MOBILE,
} from './definitions';
import { HOVER_BEHAVIORS, RESPONSIVE_BEHAVIORS, TEXT_SIZE } from './styles';
import { SideSpacingTypesValue } from './props/space/space';

export interface FatCatTheme {
	useMobileFirst: boolean
	animation: typeof ANIMATIONS
	backgroundColor: typeof BACKGROUND_COLOR
	buttonColor: typeof BUTTON_COLOR
	buttonSize: typeof BUTTON_SIZE
	buttonVariant: typeof BUTTON_VARIANT
	color: typeof COLOR
	fontFamily: typeof FONT_FAMILY
	fontSize: typeof FONT_SIZE
	fontWeight: typeof FONT_WEIGHT
	textStyle: typeof TEXT_STYLE
	hover: typeof HOVER_BEHAVIORS
	lineHeight: typeof LINE_HEIGHT
	linkColor: typeof LINK_COLOR
	linkStyle: typeof LINK_STYLE
	media: typeof MEDIA
	mediaMobile: typeof MEDIA_MOBILE
	responsive: typeof RESPONSIVE_BEHAVIORS
	screenRatio: typeof SCREEN_RATIO
	sectionWidth: typeof SECTION_WIDTH
	sideSpace?: SideSpacingTypesValue
	space: typeof SPACE
	tableStyle: typeof TABLE_STYLE
	textColor: typeof TEXT_COLOR
	textSize: typeof TEXT_SIZE
	inputStyle: typeof INPUT_STYLE
	ollistStyle: typeof OLLIST_STYLE,
	ullistStyle: typeof ULLIST_STYLE,
}

const defaultTheme: FatCatTheme = {
	useMobileFirst: false,
	animation: ANIMATIONS,
	backgroundColor: BACKGROUND_COLOR,
	buttonColor: BUTTON_COLOR,
	buttonSize: BUTTON_SIZE,
	buttonVariant: BUTTON_VARIANT,
	color: COLOR,
	fontFamily: FONT_FAMILY,
	fontSize: FONT_SIZE,
	fontWeight: FONT_WEIGHT,
	textStyle: TEXT_STYLE,
	hover: HOVER_BEHAVIORS,
	lineHeight: LINE_HEIGHT,
	linkColor: LINK_COLOR,
	linkStyle: LINK_STYLE,
	media: MEDIA,
	mediaMobile: MEDIA_MOBILE,
	responsive: RESPONSIVE_BEHAVIORS,
	screenRatio: SCREEN_RATIO,
	sectionWidth: SECTION_WIDTH,
	space: SPACE,
	tableStyle: TABLE_STYLE,
	textColor: TEXT_COLOR,
	textSize: TEXT_SIZE,
	inputStyle: INPUT_STYLE,
	ollistStyle: OLLIST_STYLE,
	ullistStyle: ULLIST_STYLE,
};

interface UIThemeProviderI {
	theme?: Partial<FatCatTheme>
	children: React.ReactNode
}

export const UIThemeProvider: React.FC<UIThemeProviderI> = ({ children, theme }) => {
	let mergedTheme;
	if (theme && !isObjectEmpty(theme)) {
		mergedTheme = deepmerge(defaultTheme, theme);
	}
	const newTheme = mergedTheme || defaultTheme;
	// TODO: maybe change locgic for this breakpoint change
	if (newTheme.useMobileFirst) {
		newTheme.media = newTheme.mediaMobile;
	}
	return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
};

UIThemeProvider.defaultProps = {
	theme: {},
};
