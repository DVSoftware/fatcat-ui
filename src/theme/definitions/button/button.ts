import { css } from 'styled-components';
import { BUTTON_COLOR } from '../color/color';

export const BUTTON_SIZE = {
	large: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s40};
	`,
	medium: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s24};
	`,
	small: css`
		padding: ${props => props.theme.space.s8} ${props => props.theme.space.s24};
	`,
	nav: css`
		padding: ${props => props.theme.space.s4} ${props => props.theme.space.s16};
	`,
};

const buttonBase = css<{size: keyof typeof BUTTON_SIZE}>`
	${props => props.size && BUTTON_SIZE[props.size]};
	${props => props.theme.textStyle.button};
	height: fit-content;
	border-radius: 4px;
`;

export const BUTTON_VARIANT = {
	primary: css<{ buttonColor: typeof BUTTON_COLOR, size: keyof typeof BUTTON_SIZE }>`
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	secondary: css<{ buttonColor: typeof BUTTON_COLOR, size: keyof typeof BUTTON_SIZE }>`
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			color: ${props => props.theme.color.white};
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.text};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	ghost: css<{ buttonColor: typeof BUTTON_COLOR, size: keyof typeof BUTTON_SIZE }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	underline: css<{ buttonColor: typeof BUTTON_COLOR }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		position: relative;
		padding: 0;
		${props => props.theme.textStyle.button};

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 1px;
			background-color: ${props => props.theme.buttonColor[props.buttonColor].default};
		}
		&:hover {
			&::before {
				width: 100%;
			}
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
			&::before {
				width: 100%;
				background-color: ${props => props.theme.buttonColor.disabled.text};
			}
		}
	`,
	noStyle: css``,
};
