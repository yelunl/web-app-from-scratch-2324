const callApi = async () => {
    try {
        const response = await fetch('https://webapp-server-mocha.vercel.app');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        addToHtml(jsonResponse);

    } catch(err) {
        console.log(err)
    }
}

callApi();

const addToHtml = (apiData) => {
    const musicList = document.querySelector('#music ul');
    apiData.forEach(item => {
        musicList.innerHTML += `
        <li>
            <div>
                <img src="${item.imageAlbum}" alt="cover ${item.nameArtist} ${item.nameSong}" />
                <div>
                    <a href="${item.link}" target="_blank">Play song</a>
                </div>
            </div>
            <h3>${item.nameArtist} ${item.nameSong}</h3>
        </li>`
    });
}

// Hamburgermenu

const hamburgerOpen = document.querySelector('header #navigation a:first-child');
const hamburgerSluiten = document.querySelector('header nav > a')
const navigationList = document.querySelector('header nav');

hamburgerOpen.addEventListener('click', () => {
    navigationList.style.transform = 'translateX(0)';
})

hamburgerSluiten.addEventListener('click', () => {
    navigationList.style.transform = 'translateX(50rem)';
})