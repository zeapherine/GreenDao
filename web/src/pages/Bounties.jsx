import React from 'react';
import BountiesCard from '../components/BountiesCard';

const Bounties = () => {
	return (
		<div className='mt-20'>
			<div>
				<h1 className='text-3xl font-bold'>Bounties</h1>
				<div className='mt-5 flex justify-evenly items-start flex-wrap '>
					<BountiesCard
						title={'Project A'}
						desc={
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical'
						}
						fund={'20'}
					/>
					<BountiesCard
						title={'Project B'}
						desc={
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical'
						}
						fund={'30'}
					/>
					<BountiesCard
						title={'Project B'}
						desc={
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical'
						}
						fund={'20'}
					/>
					<BountiesCard
						title={'title'}
						desc={
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical'
						}
						fund={'20'}
					/>
					<BountiesCard
						title={'title'}
						desc={
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical'
						}
						fund={'20'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Bounties;
