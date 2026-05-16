# Blog Pessoal do Michael Silva

Este repositório contém o blog pessoal de Michael Silva, um site estático criado com Jekyll e o tema `minima`. O projeto é focado em compartilhar conteúdo técnico, experiências com programação, acessibilidade e a evolução pessoal no universo da tecnologia.

## Visão geral

O blog foi construído para ser um portfólio técnico leve e acessível, com recursos de publicação de artigos, fluxo de conteúdo e integração com redes sociais.

### Recursos atuais

- Site estático com Jekyll
- Tema `minima` customizado para modo escuro
- Suporte a feed RSS via `jekyll-feed`
- SEO básico com `jekyll-seo-tag`
- Administração local com `jekyll-admin`
- Índice de conteúdo com `jekyll-toc`
- Arquivos de categorias e tags com `jekyll-archives`
- Estimativa de tempo de leitura com `jekyll-reading-time`
- Páginas principais: Home, Sobre e Artigos
- Publicação de posts em `_posts/`

## Estrutura do projeto

- `_posts/` - artigos do blog em Markdown
- `_site/` - site gerado pelo Jekyll
- `_config.yml` - configurações do site e plugins
- `Gemfile` / `Gemfile.lock` - dependências Ruby e Jekyll
- `index.markdown` - página inicial
- `about.markdown` - página "Sobre"
- `artigos.markdown` - lista de artigos
- `404.html` - página de erro personalizada

## Como executar localmente

Pré-requisitos:

- Ruby instalado
- Bundler instalado
- Git

Passos:

1. Abra um terminal na pasta do projeto.
2. Instale as dependências:

   ```powershell
   bundle install
   ```

3. Inicie o servidor Jekyll:

   ```powershell
   bundle exec jekyll serve --livereload
   ```

4. Acesse o blog em `http://127.0.0.1:4000/blog` ou no endereço indicado pelo Jekyll.

> Observação: o `baseurl` está configurado como `/blog` no arquivo `_config.yml`, o que é adequado para publicação no GitHub Pages sob o diretório `username.github.io/blog`.

## Como publicar

Este projeto pode ser publicado no GitHub Pages. O fluxo típico é:

1. Confirmar que o `baseurl` em `_config.yml` corresponde ao caminho do site.
2. Commitar as mudanças no repositório.
3. Fazer push para o branch usado pelo GitHub Pages.
4. Verificar o deploy em `https://michaelsss16.github.io/blog/`.

## Ferramentas e dependências

- Jekyll `~> 4.4.1`
- Minima `~> 2.5`
- jekyll-feed
- jekyll-seo-tag
- jekyll-admin
- jekyll-toc
- jekyll-archives
- jekyll-reading-time
- wdm (Windows file watcher)
- webrick (servidor local)

## Tarefas importantes para um blog pessoal profissional de programação

- [ ] Organizar e documentar a arquitetura de pastas e o fluxo de publicação de posts
- [ ] Criar e padronizar um template de front matter para artigos (`title`, `date`, `categories`, `tags`, `excerpt`)
- [ ] Ajustar e melhorar a navegação entre páginas principais, categorias e tags
- [ ] Adicionar página de contato profissional ou formulário de mensagens
- [ ] Melhorar o SEO com metadados, descrição, título e Open Graph
- [ ] Validar e otimizar a acessibilidade do site para leitores de tela e navegação por teclado
- [ ] Implementar busca interna de artigos ou integração com pesquisa externa
- [ ] Documentar o processo de contribuição e o fluxo de desenvolvimento
- [ ] Automatizar deploy com GitHub Actions ou outra pipeline CI/CD
- [ ] Criar componentes de layout reutilizáveis e incluir uma estrutura de templates personalizados
- [ ] Configurar comentários de forma profissional, como Disqus ou outra solução mais moderna

## Próximos passos sugeridos

- melhorar a página inicial com blocos de destaque para artigos, vídeos e categorias
- implementar filtros por categoria e tags
- criar posts adicionais sobre programação, acessibilidade e produtividade
- centralizar links de redes sociais e recursos de contato
- garantir que o site seja responsivo e visualmente consistente

## Sobre o autor

Visite a página ``/sobre``.
