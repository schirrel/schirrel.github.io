
# Manhê eu fiz um blog
Eu sei que não sou bem o tipo de pessoa para escrever artigos e tudo mais, mas a coçerinha de escrever sobre coisas que eu gosto surgiu. E uma ideia levou a outras que levou a outra...

1. Queria começar um blog
2. Eu ia reformular meu site
3. Queria fazer coisas totalmente diferentes no site
4. Adoro Markdown

*BOOOOOOOOOOOOOOOM*

## Vou criar meu propio Static Generator com Markdown.


Quando fui refazer meu site, uma das premissas que impus a mim mesmo, era fazer, ou me forçar a fazer, tudo, com o minimo de auxilio de agentes externos, framework ou biblioteca.

## Lógica
Parei pra pensar sobre o que seria necessário para fazer toda essa estrutura de blog.

E cheguei aos items minímos para algo não compilado:
- Arquivos .md
- Listagem das postagens
- Parser de markdown em html

Acho que é só!

Depois de identificar as necessidades, ai foi *receitinha de bolo*

* Arquivo `.json` contendo um arrays com os nomes dos posts e os arquivos para requisitar.
* Pasta "default" onde estarão todos os arquivos `.md`
*Agora vem o script*
* Verificar a URL acessada e quando a mesma conter o hash com post=, eu faco um fetch. (Utilizei Fetch API, num wrapper que eu mesmo fiz pra facilitar mesmo.)
* Parsear o conteúdo do arquivo em html, para isso utilizei o [snarkdown](https://github.com/developit/snarkdown), um parser bem simplificado, 1kb só
* Colocar no congelador e ta pronto o sorvetinho.

Caso você seja um daqueles programadores que gosta de olhar o source, verá que o arquivo `blog.js` tem 58 linhas e faz todo o serviço, "dificil".

## That's all folKs
É 100% perfeito?

Depende do seu ponto de vista.

Foi dificil? *méh*

Foi legal fazer isso e descobrir que não era um monstro tão grande assim? PRA BARALHO


### Opa quase esqueço

Ainda estou me adaptando a escrever, então por favor qualquer feedback é muito bem vindo <3

Me manda um  [emailzinho](mailto:alan@schirrel.dev) com o que achou.