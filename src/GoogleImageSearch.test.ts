import { GoogleImageSearch } from "./GoogleImageSearch";
import { env } from "../environment";

const ImageSearch = new GoogleImageSearch(env.apiKey, env.searchEngineId);


test("Check if return string is a URL", async () => {
  const res = await ImageSearch.getImageUrl("apple");
  expect(res).toMatch(new RegExp("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"));
});
