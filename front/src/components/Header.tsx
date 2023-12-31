import { AppBar, Box, Button, Container } from '@mui/material';

import Link from 'next/link';

const Header = () => {
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
					<Box>
						<Link href="/sign_in">
							<Button
								color="inherit"
								variant="outlined"
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
				</Box>
			</Container>
		</AppBar>
	);
};

export default Header;
