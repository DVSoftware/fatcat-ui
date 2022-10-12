import React from 'react';
import { DefaultTheme } from 'styled-components';

// Types
import {
	BackgroundProps,
	ResponsiveProps,
	SpaceProps,
	VisibilityProps,
	PositionProps,
	OverflowProps,
	CustomCssProps,
} from '../../../theme/props';

// Local atoms
import { SectionInnerWrapper, SectionOuterWrapper } from './Section.atoms';

export type TSection =
	{
		as?: 'section' | 'div' | 'header' | 'footer'
		children: React.ReactNode
		edge?: boolean
		scale?: boolean
		sticky?: boolean
		width?: keyof DefaultTheme['sectionWidth']
	}
	& BackgroundProps
	& CustomCssProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& VisibilityProps;

const Section: React.FC<TSection> = (props) => {
	const {
		as,
		children,
		edge,
		scale,
		sticky,
		width,
		...restProps
	} = props;

	return (
		<SectionOuterWrapper
			as={as}
			edge={edge}
			sticky={sticky}
			{...restProps}
		>
			<SectionInnerWrapper
				scale={scale}
				width={width}
				{...restProps}
			>
				{children}
			</SectionInnerWrapper>
		</SectionOuterWrapper>
	);
};

Section.defaultProps = {
	as: 'section',
	width: 'normal',
	edge: false,
	scale: false,
	sticky: false,
};

export default Section;
