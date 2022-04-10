const Navbar = () => {
	return (
		<div className='flex justify-between items-start'>
			<div className='flex'>
				<h2 className='text-4xl font-bold'>GreenDAO</h2>

				<div className='flex flex-col justify-start items-start ml-44'>
					<h3 className='mb-3'>Why DAO?</h3>
					<h3 className='mb-3'>Management token</h3>
					<h3>Tokenomics</h3>
				</div>
				<div className='flex flex-col justify-start items-start ml-10'>
					<h3 className='mb-3'>Partnerships</h3>
					<h3>Roadmap</h3>
				</div>
			</div>

			{/* <div className='flex'>
				
			</div> */}

			<div className='flex flex-col justify-start items-start'>
				<h3>contact@space.dao</h3>
				16 May, 2022
			</div>
		</div>
	);
};

export default Navbar;
