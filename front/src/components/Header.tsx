import { AppBar, Box, Button, Container } from '@mui/material';

import Link from 'next/link';
import { useUserState } from '@/hooks/useGlobalState';

const Header = () => {
	const [user] = useUserState();
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: 'transparent',
				color: 'black',
				boxShadow: 'none',
				py: '12px',
			}}
		>
			<Container maxWidth="lg" sx={{ px: 2 }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box>
						<Link href="/">Lookback</Link>
					</Box>
					{user.isFetched && (
						<>
							{!user.isSignedIn && (
								<Box>
									<Link href="/sign_in">
										<Button
											color="inherit"
											variant="outlined"
											type="submit"
											sx={{
												textTransform: 'none',
												fontSize: 16,
												boxShadow: 'none',
												border: '1px solid',
												ml: 2,
											}}
										>
											ログイン
										</Button>
									</Link>
									<Button
										color="inherit"
										variant="outlined"
										type="submit"
										sx={{
											textTransform: 'none',
											fontSize: 16,
											boxShadow: 'none',
											border: '1px solid',
											ml: 2,
										}}
									>
										新規登録
									</Button>
								</Box>
							)}
							{user.isSignedIn && <Box>{user.name}</Box>}
						</>
					)}
				</Box>
			</Container>
		</AppBar>
	);
};

export default Header;
