#Google Image Search

### Prerequisites
1. Create a new search engine [here](https://cse.google.com/cse/all) and save your search engine key
2. Create a new Google Custom Search API key [here](https://console.cloud.google.com/apis/api/customsearch.googleapis.com)

### Get started
`npm i --save google-image-search`
`import * as `

### Usage
```
getImageUrl(apiKey, searchEngineId, searchString)
```
Hashes the passed string to a material color hex code.
* `apiKey: The string which gets hashed to a material color hex code
* `searchEngineId`: Whether to include brown, grey and blue-grey (optional, default: true)
* `searchString`: Whether to include accent colors (optional, default: true)
