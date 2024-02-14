const callApi = async () => {
    try {
        const response = await fetch('https://webapp-server-mocha.vercel.app');
        const jsonResponse = await response.json();
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
const hamburgerSluiten = document.querySelectorAll('header nav a')
const navigationList = document.querySelector('header nav');

hamburgerOpen.addEventListener('click', () => {
    navigationList.style.transform = 'translateX(0)';
    hamburgerOpen.setAttribute('aria-expanded', 'true');
    navigationList.setAttribute('aria-hidden', 'false');
})

hamburgerSluiten.forEach(item => item.addEventListener('click', () => {
    navigationList.style.transform = 'translateX(50rem)';
    hamburgerOpen.setAttribute('aria-expanded', 'false');
    navigationList.setAttribute('aria-hidden', 'true');
}))


// intersection observer api

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const meterElement = entry.target;
        if(entry.isIntersecting) {
            meterElement.value = meterElement.dataset.value;
        } else {
            meterElement.value = 0;
        }       
    }
    )
}, { threshold: 1 })

const target = document.querySelectorAll('meter');

target.forEach((item) => {
    observer.observe(item);
})