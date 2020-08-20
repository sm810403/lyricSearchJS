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
function getData(inputText){
    fetch(`${apiUrl}/suggest/${inputText}`)
        .then(res => res.json())
        .then(data => console.log(data));

    showData(data);
}
function showData(data){
    const singer = data.artist.name;
    const song = data.title;

    lists.innerHTML = `
        <ul>
            <li></li>
        </ul>
        `
}
// async function getData(inputText){
//     const res = await fetch(`${apiUrl}/suggest/${term}`);
//     const data = await res.json();
// }
//get value fomr search bar
//submit it
//get data from api
//show data