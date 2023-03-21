# Clone do site da Amazon BR feito com Tailwind CSS
Um trabalho criado totalmente com **Tailwind CSS** para estudos e consolidação de aprendizado.</br>
Foi feito apenas uma parte da primeira página do site da Amazon objetivando demonstrar a capacidade do framework
em fornecer subsídios suficientes para reproduzir a página oficial facilmente.</br>
Os links da página apesar de ativos não são navegáveis, eles apenas imitam o comportamento visto no site original.

<div align="center">
<img width="455" src="https://i.imgur.com/TUOdNrC.png">
</div>

## Este projeto foi feito com:

* [Tailwind CSS 3.2.4](https://tailwindcss.com/)

## Como rodar este projeto localmente?

* Clone esse repositório: git clone https://github.com/fspjonny/tailwind-cloned-page-amazon.git<br>
* Instale o Node JS de acordo com o seu sistema operacional [Node JS Download](https://nodejs.org/en/download/)
* Se estiver usando o **Visual Studio Code** instale a extensão **Live Server**
<div align="center">
<img width="455" src="https://i.imgur.com/fm5Lkqo.png">
</div>

* Na pasta raiz da aplicação execute esta linha de comando abaixo:</br>
`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
</br>Isso faz com que qualquer alteração feita no código, seja salvo no input.css e seja atualizado em output.css,</br>
com o Live Server ativo a alteração é vista dinamicamente.
<div align="center">
<img width="455" src="https://i.imgur.com/ZN2eQZF.png">
</div>

* Agora abra a pasta deste projeto no seu **VS Code**, procure a pasta **"src"**, dentro dela tem o arquivo **"index.html"** que você deve abrir no editor.</br>
Agora na parte inferior direita do VS Code, clique em **Go Live**
<div align="center">
<img width="455" src="https://i.imgur.com/yZRDdbV.png">
<img width="455" src="https://i.imgur.com/1t92qBt.png">
</div>
</br>Pronto!, O seu navegador padrão vai abrir e exibir a página inicial do projeto,
</br>que é a mesma que aparece no começo deste documento.
