import  {  Riot,  Region }  from  'https://deno.land/x/deno_riot/mod.ts';
import "https://deno.land/x/dotenv/load.ts";


const apikey = Deno.env.get("API_KEY")
const riot  =  new  Riot(apikey);

const summoner = prompt("Enter summoner name: ");
const region = prompt("Enter region: ");

const chooseRegion = (region: unknown) => {
    const options = {
        "las": Region.LA2,
        "lan": Region.LA1,
    }
    return options[region as string] || Region.LA2
}


try {
    const info  = await riot.summoner.getSummonerByName(summoner,  chooseRegion(region));
    const props = Object.getOwnPropertyNames(info);
    const message = info.message

    if (message == "404 : Data not found - summoner not found") {
        console.log("Summoner not found 🥲");
    }else{
        console.log("Summoner found 🥳");
        console.log(info)
    }
}catch (error){
    console.log(error);
}



