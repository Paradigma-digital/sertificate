document.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelector('.place_value').innerHTML.length)
    document.querySelector('.place_info').style.left = `${document.querySelector('.place_value').innerHTML.length * 127}px`;
})