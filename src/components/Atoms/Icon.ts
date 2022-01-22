import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Theme
import {
	animation, AnimationProps,
	hover, HoverProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	position, PositionProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TIcon =
	AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Icon = styled(FontAwesomeIcon) <TIcon>`
	width: 16px;
	height: 16px;
	${animation};
	${position};
	${size};
	${visibility};
    ${space};
    ${text};
    ${hover};
	${responsive};
`;
