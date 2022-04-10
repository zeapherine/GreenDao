import React from 'react';
import { Button } from '@mantine/core';

const Project = () => {
	return (
		<div className='mt-20'>
			<div className='flex flex-col items-start justify-between'>
				<h1 className='text-2xl font-bold mb-3'>Bounty Name</h1>
				<p className='text-left my-6'>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical
				</p>
				<p className='text-2xl'>Total Funds: 10 ETH</p>

				<div className=' flex flex-col justify-start items-start'>
					<h1 className='mt-8 underline'>Fund this project</h1>
					<div className='flex mt-8'>
						<input
							className='text-gray-900 p-2 h-9 mr-5 '
							type='number'
							placeholder='Amount "ETH"'
						/>
						<Button className='bg-neutral-900 '>Fund Project</Button>
					</div>
				</div>

				<div className='mt-20  flex flex-col justify-start items-start bg-slate-700 p-5 rounded-lg'>
					<h1 className='underline text-2xl'>Proposals</h1>

					<div className='mt-5 flex flex-col justify-start items-start'>
						<textarea
							className='p-3'
							rows={10}
							cols={50}
							placeholder='Your proposals'
						/>
						<Button className='bg-neutral-900 mt-4'>Submit Proposals</Button>
					</div>

					<div className='mt-12 flex flex-col'>
						<div className='bg-slate-900 p-6 flex flex-col items-start my-5'>
							<h1 className='underline mb-5'>Floyd Myers</h1>
							<p className='text-left'>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at
							</p>
						</div>

						<div className='bg-slate-900 p-6 flex flex-col items-start'>
							<h1 className='underline mb-5'>Floyd Myers</h1>
							<p className='text-left'>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
