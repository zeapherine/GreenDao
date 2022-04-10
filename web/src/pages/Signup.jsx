import React from 'react';
import { Button } from '@mantine/core';

const Signup = () => {
	return (
		<div className='mt-10'>
			<div className='flex flex-col justify-between items-center'>
				<h1 className='text-4xl'>Create Your Profile</h1>
				<div className='flex flex-col justify-between items-start mt-8'>
					<input
						className='text-black outline-none p-3  mb-6 w-full'
						type='text'
						placeholder='Your Username'
					/>

					<Button className='bg-slate-800'>Create Profile</Button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
