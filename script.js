// console.log(`sdfgh`);

// query selectors
var btn = document.querySelector('#btn')
var inputText = document.querySelector('#input-text')
var outputText = document.querySelector('#output-txt')
var url = 'https://api.funtranslations.com/translate/minion.json'
// console.log(inputText.innerHTML)

//function
function errorHandler(error){
    prompt(`Oops! Looks like some error occured.`)
    console.log('Following error occured: ' + error);
}

function getApiResponse(text){
    return url + '?text= ' + text;
}

function respond(){
    var text = inputText.value;
    fetch(getApiResponse(text))
        .then(response => response.json())
        .then(data => outputText.innerText = data.contents.translated)
        .catch(errorHandler)
}

//event listeners
btn.addEventListener('click', respond);
