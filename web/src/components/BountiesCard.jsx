import { Button } from '@mantine/core';
import React from 'react';

const BountiesCard = ({ title, desc, fund }) => {
	return (
		<div className='bg-slate-700 m-3 max-w-sm p-4 flex flex-col justify-start items-start rounded-2xl'>
			<h3 className='text-2xl'>{title}</h3>
			<h3 className='text-left my-4 p-4 bg-neutral-800 rounded-lg'>{desc}</h3>
			<h3>Fund : {fund} Eth</h3>

			<Button className='bg-neutral-900 my-4'>Explore</Button>

			{/* <div className='flex justify-between items-center'>
				<input
					className='text-gray-900 p-2 w-32 mr-5'
					type='number'
					placeholder='Amount "ETH"'
				/>
				<Button className='bg-neutral-900 my-4'>Fund Project</Button>
			</div> */}
		</div>
	);
};

export default BountiesCard;
