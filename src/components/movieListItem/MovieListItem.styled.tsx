import styled from '@emotion/styled'

type MovieListItemStyledTypes = {
	isSelected: boolean
}

export const MovieListItemStyled = styled.div<MovieListItemStyledTypes>`
	border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
	position: relative;
	overflow-y: auto;
	display: block;

	.movie {
		transition: background-color 0.2s ease-in-out;
		background-color: ${(props) =>
			props.isSelected
				? ({ theme }) => theme.palette.grey[100]
				: ({ theme }) => theme.palette.common.white};
		transition: background-color
			${({ theme }) => theme.transitions.duration.short}
			${({ theme }) => theme.transitions.easing.easeInOut};
		padding: ${({ theme }) => theme.spacing[6]};
		cursor: pointer;
		align-items: center;
		display: flex;

		&:hover,
		&:focus {
			background-color: ${({ theme }) => theme.palette.grey[100]};
		}

		&-poster {
			margin-right: ${({ theme }) => theme.spacing[3]};
			// TODO: to check clamp is not working properly
			// width: clamp(5rem, 25%, 6rem);
			min-width: 4rem;

			.image-ratio {
				border-radius: ${({ theme }) => theme.borderRadius.sm};
				padding-bottom: 100%;
				position: relative;
				overflow: hidden;
				display: block;
				content: ' ';
				width: 100%;
			}
		}

		h4 {
			font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
			color: ${({ theme }) => theme.palette.text.primary};
			margin: 0 0 ${({ theme }) => theme.spacing[2]};
		}

		span {
			color: ${({ theme }) => theme.palette.text.primaryLight};
			font-size: ${({ theme }) => theme.spacing[3]};
		}
	}
`
