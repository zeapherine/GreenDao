import { Button } from '@mantine/core';
import { NFTStorage } from 'nft.storage';
import { useState } from 'react';
import axios from 'axios';
import image from '../assets/image.jpeg';


const CreateProject = () => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	
	const NFT_STORAGE_TOKEN= process.env.REACT_APP_NFT_STORAGE_TOKEN;
	const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
	
	const submit = async () => {
		
		// const someData = new Blob([{name, desc}]);
		// const cid = await client.store(someData);
		
		// console.log(cid);

		

		const imageFile = new File([ image  ], 'nft.jpeg', { type: 'image/jpeg' })
		const metadata = await client.store({
  			name: name,
  			description: desc,
			image: imageFile	
		})
		console.log(metadata);
	}

	const get = async () => {
	await 	axios.get('https://ipfs.io/ipfs/bafkreifsrsklegk4r3jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee')
		.then(data => console.log(data.data[0]))
  		.catch(error => console.log(error));
	}

	return (
		<div className='mt-10'>
			<div className='flex flex-col justify-between items-center'>
				<h1 className='text-4xl'>Create Your Project</h1>
				<div className='flex flex-col justify-between items-start mt-8'>
					<input
						className='text-black outline-none p-3  mb-6 w-full'
						type='text'
						placeholder='Project Name'
						onChange={(e) =>setName(e.target.value)}
					/>

					<textarea
						className='text-black outline-none p-3 mb-6'
						rows={10}
						cols={50}
						placeholder='Description'
						onChange={(e) =>setDesc(e.target.value)}
					/>

					<input
						className='text-black outline-none p-3  mb-6 w-full'
						type='number'
						placeholder='Amount to contribute'
					/>

					<Button onClick={()=>submit()} className='bg-slate-800'>Create Project</Button>
					<Button onClick={()=>get()} className='bg-slate-800'>Get Project</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateProject;
