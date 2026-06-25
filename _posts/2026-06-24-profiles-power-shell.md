---
layout: post
title:  "Profiles no Power Shell"
date:   2026-06-24 20:35:05 -0300
categories: powershell nvda
---

Neste artigo você vai aprender a configurar profiles no PowerShell para criar métodos personalizados, facilitando ações manuais e criação de prompts para LLMs com o contexto de branches do Git.

## Profiles: Definição

Um profile no PowerShell é um arquivo de script que é executado automaticamente quando o PowerShell é iniciado. Ele funciona de forma similar aos arquivos de configuração em outros shells, como o `.bashrc` ou `.zshrc` no Linux e macOS.

O profile permite que você personalize o ambiente do PowerShell de acordo com suas necessidades. Dentro dele, você pode:

- Definir aliases (apelidos) para comandos frequentemente utilizados
- Criar funções personalizadas que automatizam tarefas rotineiras
- Configurar variáveis de ambiente
- Carregar módulos específicos
- Definir cores e aparência do console

O PowerShell oferece diferentes tipos de profiles, cada um com escopo diferente:

- **Current User, Current Host**: O profile do usuário atual apenas no PowerShell
- **Current User, All Hosts**: O profile que se aplica a todos os hosts do PowerShell para o usuário atual
- **All Users, Current Host**: O profile que se aplica a todos os usuários apenas no PowerShell
- **All Users, All Hosts**: O profile que se aplica a todos os usuários e todos os hosts

Para a maioria dos casos, utilizaremos o profile **Current User, Current Host**, que é o mais comum e adequado para personalizações individuais.

## Instalação do PowerShell 7 e Terminal

### O que é o Windows Terminal

O Windows Terminal é uma aplicação moderna da Microsoft que oferece uma interface melhorada para trabalhar com shells de linha de comando, incluindo o PowerShell, o Command Prompt e o Git Bash. Ele oferece suporte a abas, temas personalizáveis e melhor integração com o Windows.

### Como instalar o Windows Terminal

A forma mais simples de instalar o Windows Terminal é através da Microsoft Store:

1. Abra a Microsoft Store
2. Procure por "Windows Terminal"
3. Clique no botão "Instalar"
4. Aguarde a conclusão da instalação

Alternativamente, você pode usar o **winget** (conforme aprendido no artigo anterior):

```
winget install Microsoft.WindowsTerminal
```

> Indico a utilização do winget para instalação devido a dificuldades de navegação na windows store.

### Como instalar o PowerShell 7

O PowerShell 7 é a versão mais recente e melhorada do PowerShell, com suporte multiplataforma. Para instalá-lo, execute o seguinte comando:

```
winget install Microsoft.PowerShell
```

Após a instalação, você pode abrir o PowerShell 7 diretamente a partir do Windows Terminal. Pode ser necessário ir até as configurações do terminal e selecionar 'power shell' como padrão de inicialização, já que todas as versões estarão disponiveis para uso. Caso a versão mais antiga seja a padrão, uma mensagem informativa será apresentada em cada inicialização.

## Criando o Arquivo de Profile

### Verificar se o arquivo de profile já existe

Para verificar se você já possui um arquivo de profile, execute o comando:

```
Test-Path $profile
```

Se o resultado for `True`, o arquivo já existe. Se for `False`, você precisará criá-lo.

### Criar o arquivo de profile

Para criar um novo arquivo de profile, utilize o comando:

```
New-Item -Path $profile -Type File -Force
```

Este comando criará o arquivo de profile no local padrão do seu sistema.

### Abrir o arquivo de profile no editor

Para abrir o arquivo de profile com o Visual Studio Code (ou outro editor de sua preferência), utilize:

```
code $profile
```

Se você preferir usar o Bloco de Notas:

```
notepad $profile
```

A variável `$profile` contém o caminho completo do arquivo de profile do usuário atual.

### Recarregar o profile após edições

Após fazer alterações no arquivo de profile, você pode recarregá-lo sem precisar fechar e abrir o PowerShell novamente, utilizando:

```
. $profile
```

O ponto (`.`) é chamado de "dot sourcing" e significa que o arquivo será executado no contexto atual da sessão do PowerShell.

## Funções Úteis para Ter no Profile

### Criar aliases para comandos frequentes

Dentro do arquivo de profile, você pode criar aliases para comandos que usa frequentemente:

```powershell
Set-Alias -Name ll -Value Get-ChildItem
Set-Alias -Name cc -Value Clear-Host
Set-Alias -Name code -Value "C:\Users\seu_usuario\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd"
```

### Função para copiar diff da branch atual em relação à main

Uma função muito útil para trabalhar com Git e LLMs é copiar o diff da branch atual em relação à main:

```powershell
function Copy-GitDiff {
    git diff main | Set-Clipboard
    Write-Host "Diff copiado para a área de transferência!" -ForegroundColor Green
}
Set-Alias -Name getDiff -Value Copy-GitDiff
```

Com esta função, ao executar `getDiff`, o diff será copiado para a área de transferência, permitindo que você o cole em um LLM para análise.

### Função para copiar status do Git com contexto

Outra função muito útil é criar um prompt com o contexto completo do branch para um LLM:

```powershell
function Copy-GitContext {
    $branch = git rev-parse --abbrev-ref HEAD
    $status = git status --porcelain
    $diff = git diff main
    
    $context = @"
# Contexto do Git
## Branch: $branch
## Status dos arquivos:
$status
## Diff em relação a main:
$diff
"@
    
    $context | Set-Clipboard
    Write-Host "Contexto do Git copiado para a área de transferência!" -ForegroundColor Green
}
Set-Alias -Name context -Value Copy-GitContext
```

### Função para navegar rapidamente para diretórios frequentes

```powershell
function Go-Projects {
    Set-Location "C:\Users\$env:USERNAME\Projects"
}
Set-Alias -Name projects -Value Go-Projects

function Go-Documents {
    Set-Location "C:\Users\$env:USERNAME\Documents"
}
Set-Alias -Name docs -Value Go-Documents
```

## Profile Completo

Abaixo está um exemplo de um profile completo que combina várias funções úteis:

> adicionar link para arquivo completo git profile

## Acessibilidade com NVDA

Ao trabalhar com profiles no PowerShell usando um leitor de tela como o NVDA, é importante lembrar que:

- As mensagens de status escritas com `Write-Host` serão lidas automaticamente pelo NVDA
- Ao utilizar `Set-Clipboard`, o NVDA informará que o conteúdo foi copiado
- A navegação entre funções e aliases segue os mesmos princípios apresentados no artigo anterior

## Conclusão

Os profiles do PowerShell são uma ferramenta poderosa para personalizar e automatizar suas tarefas rotineiras. Com as funções apresentadas neste artigo, você pode criar um ambiente de desenvolvimento mais eficiente, especialmente ao trabalhar com Git e LLMs.

Lembre-se de sempre recarregar o profile após fazer alterações (`Reload-Profile` ou `. $profile`) para que as novas configurações entrem em efeito.
