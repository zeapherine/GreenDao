import React from 'react';
import { Button } from '@mantine/core';

import { apolloClient } from './apollo-client';
import { gql } from '@apollo/client';

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

const generateChallenge = (address) => {
	return apolloClient.query({
		query: gql(GET_CHALLENGE),
		variables: {
			request: {
				address,
			},
		},
	});
};

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

					<Button onClick={() => generateChallenge()} className='bg-slate-800'>
						Create Profile
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
