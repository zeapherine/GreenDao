import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/authentication/login-user';
import { Button } from '@mantine/core';
import { authenticate } from '../utils/authentication/authenticate';

const Navbar = () => {
	const navigate = useNavigate();
	const [currentAccount, setCurrentAccount] = useState('');

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}
	};

	/*
	 * Implement your connectWallet method here
	 */
	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert('Get MetaMask!');
				return;
			}

			/*
			 * Fancy method to request access to account.
			 */
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});

			/*
			 * Boom! This should print out public address once we authorize Metamask.
			 */
			console.log('Connected', accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};

	// Render Methods
	const renderNotConnectedContainer = () => (
		<button
			onClick={connectWallet}
			className='ml-24 mt-4 py-2 px-3 rounded-full bg-pink-500 text-white'
		>
			Connect Wallet
		</button>
	);

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className='flex justify-between items-start'>
			<div className='flex'>
				<h2 onClick={() => navigate('/')} className='text-4xl font-bold'>
					GreenDAO
				</h2>

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

			<Button
				onClick={() => login().then((result) => console.log(result))}
				className='bg-slate-800'
			>
				Authenticate Wallet with Lens
			</Button>

			{currentAccount === '' ? (
				renderNotConnectedContainer()
			) : (
				<div className='flex flex-col mr-5'>
					<p>Account</p>
					<p className='w-24 text-ellipsis overflow-hidden '>
						{currentAccount}
					</p>
				</div>
			)}
		</div>
	);
};

export default Navbar;
