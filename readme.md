# Google Image Search
This is a simple library to get an image URL from a search string via Google search.
### Prerequisites
1. Create a new search engine [here](https://cse.google.com/cse/all) and save your search engine key
2. Create a new Google Custom Search API key [here](https://console.cloud.google.com/apis/api/customsearch.googleapis.com)

### Install
`npm i --save simple-google-image-search`

### Usage
```
import { GoogleImageSearch } from "./GoogleImageSearch";

const ImageSearch = new GoogleImageSearch("your API key", "your search engine key");

// Get an image URL of a banana
ImageSearch.getImageUrl("banana").then((res) => {
  console.log(res);
});
```
