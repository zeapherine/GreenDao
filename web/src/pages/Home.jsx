import { Button } from '@mantine/core';
import Card from '../components/Card';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
	return (
		<div className='mt-10'>
			<div className='flex flex-col justify-center items-start ml-[320px] p-16 pt-28 '>
				<h1 className='text-6xl font-normal'>GreenDAO IS A PUBLIC GOODS</h1>
				<h1 className='text-6xl font-normal'>FUND WITH A PROGRESSIVE</h1>
				<h1 className='text-6xl font-normal'> COLLABORATION MODEL</h1>

				<p className='mt-4 text-slate-400'>
					Based on the DAO structure and it's own management token
				</p>
			</div>

			<div className='flex justify-center mt-8'>
				<img
					className='object-cover h-96 w-full mx-48 rounded-2xl opacity-50'
					src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80'
					alt='earth'
				/>
			</div>

			<div className='flex mt-24'>
				<p className='text-2xl font-bold'>Why GreenDAO?</p>

				<div className='flex justify-center   flex-wrap mx-28'>
					<Card
						title='Create your Idea into a project, and let others join in to make the
				world a better place'
						buttonTitle={'Create your project'}
						path={'/create'}
					/>

					<Card
						title='Fund Projects and get voting powers'
						buttonTitle={'Fund Projects'}
						path={'/'}
					/>

					<Card
						title='Work on project bounties'
						buttonTitle={'Bounties'}
						path={'/'}
					/>
				</div>
			</div>

			<div className='flex mt-24'>
				<h2 className='min-w-max text-2xl font-bold'>The Vison</h2>

				<div className='flex flex-col justify-between items-start mx-24 bg-stone-600 rounded-3xl p-16'>
					<p className='text-left mb-7'>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor
						at Hampden-Sydney College in Virginia, looked up one of the more
						obscure Latin words, consectetur, from a Lorem Ipsum passage, and
						going through the cites of the word in classical literature,
						discovered the undoubtable source. Lorem Ipsum comes from sections
						1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
						of Good and Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
						amet..", comes from a line in section 1.10.32.
					</p>
					<Button>
						<AiOutlineArrowRight /> Read more
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;
