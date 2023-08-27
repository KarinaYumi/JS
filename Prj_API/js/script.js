// selecionando o botão do formulário
let btn = document.querySelector('button')

btn.addEventListener('click', function(event){

    event.preventDefault()

    let input = document.querySelector('#tel');
    
    let valor = input.value

    input.parentElement.reset()
    
    let url = `https://api.veriphone.io/v2/verify?phone=%2B${valor}&key=F5D9BF70C8234B039E950664551923BB`

    fetch(url)
        
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            let tags = []
            let tagsACriar = ['p','p', 'p', 'p']

            tagsACriar.forEach(element => {
                tags = criarElementos(element, tags)
            });
            
            let div = document.querySelector('.api')
            
            tags.forEach(element => {
                incluirNaTela(element, div)
            });

            editarTds(response, tags)
        })
})

function criarElementos(element, listaTags){
    let td = document.createElement(element)
    listaTags.push(td)
    return listaTags
}


function incluirNaTela(element, tr){
    tr.appendChild(element)
}

function editarTds(response, tags){
    tags[0].textContent = tags[0].textContent + response.status 
    tags[1].textContent = tags[1].textContent + response.phone
    tags[2].textContent = tags[2].textContent + response.country
    tags[3].textContent = tags[3].textContent + response.phone_region

}
