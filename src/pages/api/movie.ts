// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieDetailResponseTypes } from '@/types/movie'

const api = `${process.env.OMBD_API_ACCESS_URL}`

export default async function getMovieDetail(
	req: NextApiRequest,
	res: NextApiResponse<MovieDetailResponseTypes>
) {
	let payload = ``

	if (req.query.i) {
		payload += `i=${req.query.i}&plot=full`
	}

	try {
		const fetchedResult = await fetch(`${api + payload}`, {
			method: 'GET',
		})
		const fetchedResultJSON = await fetchedResult.json()

		if (fetchedResultJSON.Response === 'True') {
			res.status(200).json({
				Response: true,
				SelectedMovieDetail: fetchedResultJSON,
			})
		} else {
			throw new Error(fetchedResultJSON.Error || 'Oops! Please try again...')
		}
	} catch (err: any) {
		res.status(400).json({
			Response: false,
			Error: err.message || 'Oops! Please try again...',
		})
	}
}
