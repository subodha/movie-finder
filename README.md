# Movie Search app

Movie search App built using Next.js & OMDB api.  


## Features

- Movie Search
- Movie Filter by Year and Type
- Movie detail
- Watch list
- Infinite scroll
- Mobile friendly UI


## Tech Stack

There are many tools and utilitys has been intigrated to this project in order to maintain the qulity and the scalability of the project.

| Name                      | Description                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| Next.JS                   | In order to have organiced production ready react application base and many more Next.Js features|                                  |
| Typescript                | For avoiding type errors and enhance the readability while developing                           |
| Emotion                   | Writing css styles with JavaScript (css-in-js) with Themeing and Styled components              |
| Storybook                 | To developing UI components in isolation for React.                                             |
| React loading keleton     | Avoid to blank screens, spinner loaders and improves the user experience                        |



**Eslint:** Use in order to maintain code qulity, Avoiding errors and find many issues in the code

**Prettier:** Use for format code in order to maintain code consistance yand qulity

Branches

| Branch name    | Description                                 |
| -------------- | ------------------------------------------- |
| main           | Use for production build.                   |
| develop        | Use for development                         |




## Installation

Please clone the project first and install all the dependencies in to your local pc

```bash
  git clone https://github.com/subodha/movie-finder.git
  cd movie-finder
  yarn
```

Once above step done update enviramnt variables
    
## Set Environment Variables

To run this project, you will need to add the following Environment variables to your .env.local file

  1. Take a copy of `env.local.sample` and re-name to `.env.local`
  2. Get your OMDB API key
  3. Replace `ADD YOUR OMDB_API_KEY HERE` with Your OMDB API Key
   
Now All set.. you are ready to run the app


## Run Locally

| Command                  | Description                                     |
| :------------------------| ------------------------------------------------|
| `yarn dev`               | Start a development server                      |
| `yarn build`             | Build the a production version of the website   |
| `yarn start`             | Launch a production server                      |
| `yarn storybook`         | Starts Storybook in development mode            |
| `yarn build-storybook`   | Story book production build                     |
| `yarn lint`              | Linting the code                                |
| `yarn prettier-format`   | Format the code base                            |


## Roadmap

- Integrate jest for Testing

- Enhance theming options

- Replace bable with next [SWC compiler once it is ready for emotion](https://github.com/vercel/next.js/discussions/30174)

- Enhance UI with metirial UI with emotion engin


## Known issues

- Api is not supported to get movies for year range


## Acknowledgements

 - [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
 - [Georgi Nikoloff](https://css-tricks.com/how-to-cancel-pending-api-requests-to-show-correct-data/)
 

