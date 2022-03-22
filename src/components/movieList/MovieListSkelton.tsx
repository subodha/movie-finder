import Skeleton from 'react-loading-skeleton'

import { MovieListSkeltonStyled } from './MovieList.styled'

export const MovieListSkelton = (): JSX.Element => (
	<MovieListSkeltonStyled>
		<div>
			<Skeleton
				borderRadius={4}
				height="5rem"
				width="5rem"
				containerClassName="avatar-skeleton"
			/>
		</div>
		<div>
			<Skeleton count={2} />
			<Skeleton height={8} count={1} width={50} />
		</div>
	</MovieListSkeltonStyled>
)
