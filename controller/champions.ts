import { Riot, Languages } from "https://deno.land/x/deno_riot/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const apikey = Deno.env.get("API_KEY");
const riot = new Riot(apikey);

const getChampions = async (ctx) => {
  const champions = await riot.champion.getChampions(Languages.es_MX);
  ctx.response.body = champions.data;
};

export { getChampions };
