import styled from '@emotion/styled'

export const MovieListItemStyled = styled.div`
	position: relative;
	border-bottom: 1px solid ${(props) => props.theme.palette.divider};
	height: 100%;
	overflow-y: auto;
	display: block;

	.movie {
		transition: background-color 0.2s ease-in-out;
		background-color: ${(props) => props.theme.palette.common.white};
		transition: background-color
			${(props) => props.theme.transitions.duration.short}
			${(props) => props.theme.transitions.easing.easeInOut};
		padding: ${(props) => props.theme.spacing[4]};
		cursor: pointer;
		display: flex;

		&:hover {
			background-color: ${(props) => props.theme.palette.grey[100]};
		}

		&-poster {
			margin-right: ${(props) => props.theme.spacing[3]};
			// TODO: to check clamp is not working properly
			// width: clamp(5rem, 25%, 6rem);
			min-width: 5rem;

			.image-ratio {
				border-radius: ${(props) => props.theme.borderRadius.sm};
				padding-bottom: 100%;
				position: relative;
				overflow: hidden;
				display: block;
				content: ' ';
				width: 100%;
			}
		}

		h4 {
			font-weight: ${(props) => props.theme.typography.fontWeightRegular};
			color: ${(props) => props.theme.palette.text.primary};
			margin: 0 0 ${(props) => props.theme.spacing[2]};
		}

		span {
			color: ${(props) => props.theme.palette.text.primaryLight};
			font-size: ${(props) => props.theme.spacing[3]};
		}
	}
`
