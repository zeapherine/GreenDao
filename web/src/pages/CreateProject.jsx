import { Button } from '@mantine/core';

const CreateProject = () => {
	return (
		<div className='mt-10'>
			<div className='flex flex-col justify-between items-center'>
				<h1 className='text-4xl'>Create Your Project</h1>
				<div className='flex flex-col justify-between items-start mt-8'>
					<input
						className='text-black outline-none p-3  mb-6 w-full'
						type='text'
						placeholder='Project Name'
					/>

					<textarea
						className='text-black outline-none p-3 mb-6'
						rows={10}
						cols={50}
						placeholder='Description'
					/>

					<input
						className='text-black outline-none p-3  mb-6 w-full'
						type='number'
						placeholder='Amount to contribute'
					/>

					<Button className='bg-slate-800'>Create Project</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateProject;
