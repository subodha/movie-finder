// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieSearchResponseTypes, MovieType } from '@/types/movie'

const api = `${process.env.OMBD_API_ACCESS_URL}`

export default async function movieSearchHandler(
	req: NextApiRequest,
	res: NextApiResponse<MovieSearchResponseTypes>
) {
	let payload = ``

	if (req.query.s) {
		payload += `s=${req.query.s}`

		if (req.query.year) payload += `&y=${req.query.year}`

		if (req.query.type) payload += `&type=${req.query.type}`

		if (req.query.page) payload += `&page=${req.query.page}`
	}

	try {
		// res.status(200).json({ url: `${api + payload}` })
		// const fetchedResult = await fetch(api + payload)
		const fetchedResult = await fetch(`${api + payload}`, {
			method: 'GET',
		})
		const fetchedResultJSON = await fetchedResult.json()

		if (fetchedResultJSON.Response === 'True') {
			res.status(200).json({
				Response: true,
				SearchResult: fetchedResultJSON.Search,
				TotalResults: fetchedResultJSON.totalResults,
			})
		}
	} catch (err: any) {
		res.status(400).json({
			Response: false,
			Error: err.message || 'Oops! Please try again...',
		})
	}
}
