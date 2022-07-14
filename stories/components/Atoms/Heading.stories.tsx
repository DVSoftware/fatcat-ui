import React, { useRef, useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading as HeadingOrigin } from '../../../src/components/Atoms/Heading';
import { Text } from '../../../src/components/Atoms/Text';
import { Flex } from '../../../src/components/Atoms/Flex';

import { TEXT_COLOR } from '../../../src/theme/definitions';

import readme from './Heading.md';

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
	title: 'Basic Elements/Heading',
	component: HeadingOrigin,
	argTypes: {
		as: {
			control: 'select',
			options: headingTypes,
			description: `List of heading types: ${headingTypes.map(i => `\`${i}\``).join(', ')}`,
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		textColor: {
			control: 'select',
			options: Object.keys(TEXT_COLOR),
			description: 'Just for demo purposes',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof HeadingOrigin>;

const Template: ComponentStory<typeof HeadingOrigin> = ({ ...args }) => {
	const el = useRef(null);
	const [style, setStyle] = useState({
		fontSize: '',
		lineHeight: '',
		fontWeight: '',
	});

	useEffect(() => {
		setStyle(window.getComputedStyle(el.current));
	}, [el, args.as]);

	return (
		<>
			<HeadingOrigin ref={el} {...args}>
				{`Heading ${args.as}`}
			</HeadingOrigin>
			<Flex
				direction="column"
				gap="4px"
			>
				<Text>
					{`Text color: ${TEXT_COLOR[args.textColor].toLowerCase()}`}
				</Text>
				<Text>
					{`Font-size: ${style.fontSize}`}
				</Text>
				<Text>
					{`Line-Height: ${style.lineHeight}`}
				</Text>
				<Text>
					{`Font-weight: ${style.fontWeight}`}
				</Text>
			</Flex>
		</>
	);
};

export const Heading = Template.bind({});

Heading.parameters = { controls: { include: ['as', 'textColor'] } };
Heading.args = {
	as: 'h1',
	textColor: 'black',
};
