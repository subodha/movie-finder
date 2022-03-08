import { css, Global } from '@emotion/react'

const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				min-height: 100%;
				padding: 0;
				margin: 0;
				font-family: 'Rubik', sans-serif, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			a {
				color: inherit;
				text-decoration: none;
			}

			* {
				box-sizing: border-box;
			}
		`}
	/>
)

export default globalStyles
