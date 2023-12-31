import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
	Stack,
	styled,
} from '@mui/material';
import axios, { AxiosResponse, AxiosError } from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const DefaultTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'black',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'black',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'black',
			borderWidth: '1px',
		},
		'&:hover fieldset': {
			borderColor: 'black',
			borderWidth: '1px',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'black',
			borderWidth: '1px',
		},
	},
});

type SignInFormData = {
	email: string;
	password: string;
};

const SignIn: NextPage = () => {
	const router = useRouter();

	const { handleSubmit, control } = useForm<SignInFormData>({
		defaultValues: { email: '', password: '' },
	});

	const onSubmit: SubmitHandler<SignInFormData> = (data) => {
		const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/sign_in';
		const headers = { 'Content-Type': 'application/json' };

		axios({ method: 'POST', url: url, data: data, headers: headers })
			.then((res: AxiosResponse) => {
				localStorage.setItem('access-token', res.headers['access-token']);
				localStorage.setItem('client', res.headers['client']);
				localStorage.setItem('uid', res.headers['uid']);
				router.push('/');
			})
			.catch((e: AxiosError<{ error: string }>) => {
				console.log(e.message);
			});
	};
	const validationRules = {
		email: {
			required: 'メールアドレスを入力してください。',
			pattern: {
				value:
					/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
				message: '正しい形式のメールアドレスを入力してください。',
			},
		},
		password: {
			required: 'パスワードを入力してください。',
		},
	};

	return (
		<Box
			sx={{
				minHeight: 'calc(100vh - 57px)',
			}}
		>
			<Container maxWidth="sm">
				<Box sx={{ mb: 4, pt: 4 }}>
					<Typography
						component="h2"
						sx={{ fontSize: 32, color: 'black', fontWeight: 'bold' }}
					>
						ログイン
					</Typography>
				</Box>
				<Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
					<Controller
						name="email"
						control={control}
						rules={validationRules.email}
						render={({ field, fieldState }) => (
							<DefaultTextField
								{...field}
								type="text"
								label="メールアドレス"
								error={fieldState.invalid}
								helperText={fieldState.error?.message}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						rules={validationRules.password}
						render={({ field, fieldState }) => (
							<DefaultTextField
								{...field}
								type="password"
								label="パスワード"
								error={fieldState.invalid}
								helperText={fieldState.error?.message}
							/>
						)}
					/>
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
						送信する
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default SignIn;
