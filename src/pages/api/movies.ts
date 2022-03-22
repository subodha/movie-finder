import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieSearchResponseTypes } from '@/types/movie'

const api = `${process.env.OMBD_API_ACCESS_URL}`

export default async function movieSearchHandler(
	req: NextApiRequest,
	res: NextApiResponse<MovieSearchResponseTypes>
) {
	let payload = ``

	if (req.query.s) {
		payload += `s=${req.query.s}`

		if (req.query.y) payload += `&y=${req.query.y}`

		if (req.query.type) payload += `&type=${req.query.type}`

		if (req.query.page) payload += `&page=${req.query.page}`
	}

	// res.status(200).json(req.query.y)

	try {
		const fetchedResult = await fetch(`${api + payload}`, {
			method: 'GET',
		})
		const fetchedResultJSON = await fetchedResult.json()

		if (fetchedResultJSON.Response === 'True') {
			const currentPage = Number(req.query.page)
			const totalResults = Number(fetchedResultJSON.totalResults)
			const totalPages = Math.ceil(totalResults / 10)
			const hasMorePage = currentPage < totalPages

			res.status(200).json({
				Response: true,
				SearchResult: fetchedResultJSON.Search,
				CurrentPage: currentPage,
				HasMorePage: hasMorePage,
				TotalResults: totalResults,
			})
		}
	} catch (err: any) {
		res.status(400).json({
			Response: false,
			Error: err.message || 'Oops! Please try again...',
		})
	}
}
