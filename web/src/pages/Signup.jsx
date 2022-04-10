import React from 'react';
import { Button } from '@mantine/core';
import { login } from '../utils/authentication/login-user';

const Signup = () => {
	// const { ethereum } = window;
	// const accounts = ethereum.request({ method: 'eth_accounts' });
	// const account = accounts[0];

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

					<Button
						onClick={() => login().then((result) => console.log(result))}
						className='bg-slate-800'
					>
						Create Profile
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
