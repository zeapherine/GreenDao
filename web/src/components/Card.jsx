import React from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = ({ title, buttonTitle }) => {
	return (
		<div className='flex flex-col w-96 justify-between items-start bg-neutral-900 rounded-2xl p-4 m-5'>
			<h4 className='p-3 text-left'>{title}</h4>
			<Button className='p-2 pl-3'>
				{buttonTitle} <AiOutlineArrowRight />{' '}
			</Button>
		</div>
	);
};

export default Card;
