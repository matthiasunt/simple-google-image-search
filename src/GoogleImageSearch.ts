import axios from 'axios';

export class GoogleImageSearch {
  private readonly apiKey: string;
  private readonly searchEngineId: string;

  constructor(apiKey: string, searchEngineId: string) {
    this.apiKey = apiKey;
    this.searchEngineId = searchEngineId;
  }

  public async getImageUrl(searchString: string) {
    try {
      const res: {
        status: number;
        data: {
          items: { link: string; title: string }[];
        };
      } = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&q=
    ${searchString}&cx=${this.searchEngineId}&searchType=image&enableImageSearch=true`);

      if (res.data.items && res.data.items.length > 0) {
        return res.data.items[0].link;
      } else {
        return 'No image found.';
      }
    } catch (err) {
      return err;
    }
  }
}
