import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TUlList = {
	variant?: keyof DefaultTheme['ullistStyle']
	bulletColor?: keyof DefaultTheme['color']
} & GeneralProps;

export const UlList = styled.ul.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TUlList>`
	list-style: none;
	padding-left: ${props => props.theme.space.s24};
	> li {
		display: flex;
	}

	${props => props.variant && props.theme.ullistStyle[props.variant]};
	${generalProps};
`;

UlList.defaultProps = {
	variant: 'base',
	bulletColor: 'black',
	textColor: 'primary',
};
