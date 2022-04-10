import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BountiesCard = ({ title, desc, fund }) => {
    const navigate = useNavigate();
	return (
		<div className='bg-slate-700 m-3 max-w-sm p-4 flex flex-col justify-start items-start rounded-2xl'>
			<h3 className='text-2xl'>{title}</h3>
			<h3 className='text-left my-4 p-4 bg-neutral-800 rounded-lg'>{desc}</h3>
			<h3>Fund : {fund} Eth</h3>

			<Button onClick={()=>navigate(`/${title}`)} className='bg-neutral-900 my-4'>Explore</Button>

			
		</div>
	);
};

export default BountiesCard;
