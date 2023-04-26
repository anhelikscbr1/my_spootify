const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', ()=>{
    loadMusicData()
})

const loadMusicData = () => {
    
    const url = 'https://spotify81.p.rapidapi.com/top_200_tracks';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'c1f3e52d9amsh19c924550204a82p14b3d7jsn8a3f4755fc92',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err))
}

const creaCards = () => {
    topTwoHundred.forEach((song) =>{
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    
    })
    contenido.appendChild(fragment)
}