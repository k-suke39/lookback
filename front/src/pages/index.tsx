import { Box, Grid, Container, Pagination } from '@mui/material';
import camelcaseKeys from 'camelcase-keys';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ArticleCard from '@/components/ArticleCard';
import { fetcher } from '@/utils';
import { ClassNames } from '@emotion/react';

type ArticleProps = {
	id: number;
	title: string;
	createdAt: string;
	fromToday: string;
	user: {
		name: string;
	};
};

const Index: NextPage = () => {
	const router = useRouter();
	const page = 'page' in router.query ? Number(router.query.page) : 1;
	const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/articles/?page=' + page;

	const { data, error } = useSWR(url, fetcher);
	if (error) return <div>An error has occurred.</div>;
	if (!data) return <div>Loading...</div>;

	const articles = camelcaseKeys(data.articles);
	const meta = camelcaseKeys(data.meta);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		router.push('/?page=' + value);
	};

	return (
		<Box className="bg-[url('/grid.svg')">
			<Container maxWidth="md" sx={{ pt: 6 }}>
				<Grid container spacing={4}>
					{articles.map((article: ArticleProps, i: number) => (
						<Grid key={i} item xs={12} md={6}>
							<Link href={'/articles/' + article.id}>
								<ArticleCard
									title={article.title}
									fromToday={article.fromToday}
									userName={article.user.name}
								/>
							</Link>
						</Grid>
					))}
				</Grid>
				<Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
					<Pagination
						count={meta.totalPages}
						page={meta.currentPage}
						onChange={handleChange}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Index;
