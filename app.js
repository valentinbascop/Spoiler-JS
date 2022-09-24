
    let elements = document.querySelectorAll('.spoiler')

let createSpoilerButton = function (element) {

    // On crée la span .spoiler-content
    let span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML

    // On crée le bouton spoiler
    let button = document.createElement('button')
    button.textContent = 'Spoiler'
    element.appendChild(button)

    //On ajoute les éléments au DOM
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)

    //On met l'écouteur au clique
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}

for(var i= 0; i < elements.length; i++){
    	createSpoilerButton(elements[i])
}