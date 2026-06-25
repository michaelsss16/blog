---

## layout: post
title:  "Git no Terminal com leitor de tela NVDA: introdução"
date:   2026-06-25 20:30:00 -0300
categories: git nvda terminal

Neste artigo, você aprenderá sobre o que é o Git, como utilizá-lo no terminal com o leitor de tela NVDA de forma totalmente acessível, além dos seus primeiros comandos para dominar o versionamento dos seus projetos.

## Conteúdo disponível em vídeo

Você pode acessar o conteúdo desta página também através da playlist abaixo, disponível no YouTube.

## Introdução

Segundo a definição da própria [Atlassian](https://www.atlassian.com/br/git/tutorials/what-is-git), o Git é "um sistema de controle de versão distribuído de código aberto, projetado para lidar com tudo, desde projetos pequenos a muito grandes, com velocidade e eficiência."

E você deve estar se perguntando agora: o que é um sistema de controle de versão, no final das contas?

"O controle de versão é um sistema que registra as mudanças feitas em um arquivo ou um conjunto de arquivos ao longo do tempo de forma que você possa recuperar versões específicas mais tarde". [Documentação Oficial do Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Sobre-Controle-de-Vers%C3%A3o)

Com o Git no terminal, é possível gerenciar todo o histórico de desenvolvimento de um software ou site. Assim como realizamos tarefas comuns em um CLI (Command Line Interface), como vimos com o PowerShell, podemos utilizar comandos de texto para registrar alterações, reverter erros e organizar nossos arquivos.

Como utilizamos a linha de comando, temos à disposição a acessibilidade essencial para usuários de leitores de tela, como o NVDA, tirando proveito da leitura de retornos em texto puro.

## Verificando o status do projeto

O comando mais importante para você se situar durante o uso do Git é o `git status`. Ele funciona como um "radar" que diz quais arquivos foram modificados, adicionados ou deletados.

Para utilizá-lo, basta digitar no terminal (certificando-se de estar dentro do diretório do seu projeto):

```
git status

```

Para nós, o padrão de texto e a estrutura das frases dita pelo Git (como "Untracked files" ou "Changes to be committed") deixará claro o estado de cada arquivo.

Caso precise reler a saída do comando ou conferir a ortografia de algum arquivo listado, lembre-se de utilizar a navegação por exploração de texto do NVDA. Com o teclado numérico desativado, basta utilizar as teclas 7, 8 e 9 para revisar as linhas lidas pelo console.

## Adicionando e salvando alterações

Após modificar ou criar novos arquivos, precisamos avisar ao Git que queremos prepará-los para o salvamento. Fazemos isso com o comando `git add`.

Para adicionar todas as modificações da pasta de uma só vez (prática muito comum no dia a dia), usamos o ponto final após o comando:

```
git add .

```

Finalmente, para criar de fato o "ponto de restauração" no histórico do projeto, usamos o comando `git commit`. É obrigatório deixar uma mensagem clara sobre o que foi feito, utilizando o parâmetro `-m` e passando o texto explicativo entre aspas:

```
git commit -m "Criação da página inicial do projeto"

```

O NVDA lerá o retorno indicando quantos arquivos foram alterados e quantas linhas foram inseridas ou deletadas. Para revisar os detalhes minuciosamente, basta utilizar novamente a exploração de texto com o teclado numérico (7, 8 e 9).

Dica: Se você errar a digitação de um comando longo, lembre-se de usar a "seta para cima" para acessar o histórico de comandos, editar a linha com as setas laterais e pressionar Enter novamente, poupando o trabalho de reescrever tudo.

## Conclusão

Ao longo deste artigo, vimos como é simples integrar o Git ao terminal que já conhecemos e como utilizar o NVDA para ler os retornos e gerenciar o versionamento de nossos arquivos de maneira totalmente acessível. Nos próximos tutoriais, avançaremos para a conexão do nosso repositório local com a nuvem utilizando o GitHub.