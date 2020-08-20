const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
const lists = document.querySelector('.lists');
const more = document.querySelector('.more');
const form = document.querySelector('form');

const apiUrl = 'https://api.lyrics.ovh';

form.addEventListener('submit', e =>{
    e.preventDefault();
    let inputText = searchBar.value.trim();
    console.log(inputText)
    if (!inputText) {
        alert('please type in something');
    } else {
        getData(inputText)
    }
});
async function getData(inputText){
    const res = await fetch(`${apiUrl}/suggest/${inputText}`);
    const data = await res.json();
// function getData(inputText){
//     fetch(`${apiUrl}/suggest/${inputText}`)
//         .then(res => res.json())
//         .then(data => console.log(data));

    showData(data);
}
function showData(data){
    
    let output = '';

    data.data.forEach(song =>{
        const singer = song.artist.name;
        const songs = song.title;
        output +=`
            <li><span class="singer">${singer}</span>:${songs}
                <button class="btn2">get lyrics</button>
            </li>
        `
    });
    lists.innerHTML = `
        <ul>
            ${output}
        </ul>
        `
    if (data.prev || data.next){
        more.innnerHTML = `
            ${data.prev? `<button class="btn2">Prev</button>`: ''}
            ${data.next? `<button class="btn2">Next</button>`: ''}
        `
    } else {
        more.innerHTML = '';
    }
    

     
}

//get value fomr search bar
//submit it
//get data from api
//show data