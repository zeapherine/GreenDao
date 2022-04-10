import React from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, buttonTitle, path }) => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col w-96 justify-between items-start bg-neutral-900 rounded-2xl p-4 m-5'>
			<h4 className='p-3 text-left'>{title}</h4>
			<Button onClick={() => navigate(path)} className='p-2 pl-3'>
				{buttonTitle} <AiOutlineArrowRight />{' '}
			</Button>
		</div>
	);
};

export default Card;
