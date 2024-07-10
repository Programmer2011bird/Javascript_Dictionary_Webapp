const URL_ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en";
const word = document.getElementById("word-input");
const search_btn = document.getElementById("search-btn");


async function FetchWord(SearchWord){
    try{
        const RESPONSE = await fetch(`${URL_ENDPOINT}/${SearchWord}`);
        const JSON = await RESPONSE.json();
        
        const Meanings = JSON[0]["meanings"][0]["definitions"];
        let Definitions = [];
        let Examples = [];
        
        for (let index = 0; index < Meanings.length; index++) {
            Definitions.push(Meanings[index]["definition"]);
            Examples.push(Meanings[index]["example"]);
        }
        
        let word = JSON[0]["word"];
        let phonetic = JSON[0]["phonetic"];

        document.body.innerHTML = `
            <h1><i style="color:orangered">Word</i> : ${word}</h1>
            <br>
            <h1><i style="color:orangered">Phonetic</i> : ${phonetic}</h1>
            <br>
            <h2><i style="color:orange">Definitions</i> : ${Definitions}</h2>
            <h2><i style="color:orange">Examples</i> : ${Examples}</h2>
        `;
    } catch(err){
        document.body.innerHTML = "<h1>Oops There Is A Problem, Try Another Time</h1>";
    }
}

search_btn.addEventListener("click", (e) => {
    FetchWord(word.value);
});
