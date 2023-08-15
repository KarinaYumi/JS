let btn = document.querySelector('button')

btn.addEventListener('click', function(event){
    event.preventDefault()

fetch('lista_produto.json')

  .then(response => response.json())
  .then(data => {

    function criar(tag, classe) {

      var novaTag = document.createElement(tag);
      if (classe) {
        novaTag.classList.add(classe);
      }

      return novaTag;
    }
    
    const produtosList = document.getElementById("produtos-list");
    
    let ul = criar('ul', 'listaProduto');
    document.body.appendChild(ul);

        data.forEach(produto => { //vai percorrer o json e pegar os dados

          const listItem = document.createElement("body"); //adicionar no body
          listItem.classList.add('container-un')

          const imagem = document.createElement("img"); // cria variável pra adicionar na tela
            imagem.src = produto.url_imagem;
            imagem.alt = produto.nome;
            listItem.appendChild(imagem);
            imagem.classList.add('img')

            const nome = document.createElement("h2"); //cria o elemento HTML
            nome.textContent = produto.nome; //adiciona o conteúdo
            listItem.appendChild(nome); //insere na tela
            nome.classList.add('nome') // classe

            const descricao = document.createElement("p");
            descricao.innerHTML = `${produto.descricao}`;
            listItem.appendChild(descricao);
            descricao.classList.add('desc')

            const fornecedor = document.createElement("p");
            fornecedor.innerHTML = `<strong>Fornecedor:</strong> ${produto.fornecedor}`;
            listItem.appendChild(fornecedor);
            fornecedor.classList.add('fornecedor')

            const preco = document.createElement("p");
            preco.innerHTML = `<strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}`;
            listItem.appendChild(preco);
            preco.classList.add('preco')

            produtosList.appendChild(listItem);
    });
  }
  )}
);
