import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// themes
import { generalProps, GeneralProps } from '../../../theme/props';

export type TOlList = {
	variant?: keyof DefaultTheme['ollistStyle']
	bulletColor?: keyof DefaultTheme['color']
} & GeneralProps;

export const OlList = styled.ol.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TOlList>`
	list-style: none;
	counter-reset: item;
	padding-left: ${props => props.theme.space.s24};

	> li {
		display: flex;
		counter-increment: item;
		&:before {
			display: inline-block;
			content: counter(item) ". ";
			font-size: 1em;
			width: 1em;
			margin-right: clamp(4px, 0.35em, 0.35em);
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]}`};
		}
	}

	${props => props.variant && props.theme.ollistStyle[props.variant]};
	${generalProps};
`;

OlList.defaultProps = {
	variant: 'base',
	textColor: 'primary',
	bulletColor: 'black',
};
