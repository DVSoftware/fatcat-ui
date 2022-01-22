import styled from 'styled-components';


import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	flex, FlexProps,
	hover, HoverProps,
	opacity, OpacityProps,
	overflow, OverflowProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TFlex =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& FlexProps
	& HoverProps
	& OpacityProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& VisibilityProps;

export const Flex = styled.div<TFlex>`
	width: 100%;
	${animation};
	${background};
	${border};
	${flex};
	${hover};
	${opacity};
	${overflow};
	${position};
	${size};
	${space};
	${visibility};
	${hover};
	${responsive};
`;

Flex.defaultProps = {
	$initialDisplay: 'flex',
};
