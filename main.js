const TS = 1;
const API_KEY = "d0cadc98329220dc1a111e9025744f22";
const HASH = "5dce2a5480b629a96ec82bfbf04f40d4";

const api = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    params: {
      ts: TS,
      apikey: API_KEY,
      hash: HASH,
    },
});

async function getCharacters(){
    const { data } = await api("public/characters");
    console.log(data); 
    createCharacter(data, recoCharacters);
    showTrending(data, trendingCharacters);
}

function createCharacter(info,contenedor) {
  console.log('Ejecutando createCharacter');
  for (let i = 0; i < info.data.results.length; i++) {
    if (i>5) {
      break
    } else {
      const characterContainer = document.createElement('div');
      const movieImg = document.createElement('img');
      characterContainer.classList.add('Card');
      movieImg.classList.add('w-full');
      movieImg.classList.add('h-3/5');
      movieImg.classList.add('rounded-t-lg');
      movieImg.classList.add('bg-cover');
      movieImg.classList.add('overscroll-x-contain');
      movieImg.setAttribute('src', `${info.data.results[i].thumbnail.path}.${info.data.results[i].thumbnail.extension}`);
      
  
      const infoContainer = document.createElement('div');
      const titleCharacter = document.createElement('p');
      const decriptionCharacter = document.createElement('p');
      titleCharacter.classList.add('text-white');
      titleCharacter.classList.add('text-base');
      titleCharacter.classList.add('mb-2');
      decriptionCharacter.classList.add('text-white');
      decriptionCharacter.classList.add('text-xs');
      infoContainer.classList.add('w-full');
      infoContainer.classList.add('h-3/5');
      infoContainer.classList.add('bg-gray-700');
      infoContainer.classList.add('p-4');
      titleCharacter.innerText = `${info.data.results[i].name}`;
      decriptionCharacter.innerText = `Cuenta con: ${info.data.results[i].comics.available} comics`;
      infoContainer.appendChild(titleCharacter);
      infoContainer.appendChild(decriptionCharacter);
      characterContainer.appendChild(movieImg);
      characterContainer.appendChild(infoContainer);
      contenedor.appendChild(characterContainer);
    }
  }
}
function showTrending (infoChar, Container) {
  for (let i = 6; i < infoChar.data.results.length; i++) {
    const trendCharContainer = document.createElement('div');
    const trendCharData = document.createElement('div');
    const trendCharContent = document.createElement('img');
    const trendCharName = document.createElement('p');
    const trendCharInfo = document.createElement('p');

    //Adding classes
    trendCharContainer.classList.add('w-full');
    trendCharContainer.classList.add('h-full');
    trendCharContainer.classList.add('flex');
    trendCharContainer.classList.add('flex-col');
    trendCharContainer.classList.add('space-y-4');
    trendCharContainer.classList.add('items-center');
    trendCharContainer.classList.add('justify-center');
    trendCharContainer.classList.add('mt-6');


    trendCharContent.classList.add('h-full');
    trendCharContent.classList.add('w-full');
    trendCharContent.classList.add('bg-cover');
    trendCharContent.classList.add('rounded-xl');
    trendCharContent.classList.add('lg:h-[38rem]');
    trendCharContent.classList.add('lg:text-right');
    trendCharContent.classList.add('lg:bg-center');
    trendCharContent.classList.add('lg:pt-12');


    trendCharName.classList.add('text-white');

    trendCharInfo.classList.add('text-sm');
    trendCharInfo.classList.add('text-white');
    trendCharInfo.classList.add('pl-8');
    trendCharInfo.classList.add('text-white-300');
    trendCharInfo.classList.add('mr-24');
    trendCharInfo.classList.add('lg:mr-8');
    trendCharInfo.classList.add('lg:text-base');
    
    //Adding API Source
    trendCharContent.setAttribute('src', `${infoChar.data.results[i].thumbnail.path}.${infoChar.data.results[i].thumbnail.extension}`);
    trendCharName.innerText = `${infoChar.data.results[i].name}`;
    trendCharInfo.innerText = `Cuenta con: ${infoChar.data.results[i].comics.available} comics`;
    
    trendCharData.appendChild(trendCharContent);
    trendCharData.appendChild(trendCharName);
    trendCharData.appendChild(trendCharInfo);
    trendCharContainer.appendChild(trendCharData);
    Container.appendChild(trendCharContainer);
  }
}