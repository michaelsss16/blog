document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge');

  codeBlocks.forEach(function(codeBlock) {
    if (codeBlock.querySelector('.copy-code-btn')) {
      return;
    }

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-btn';
    copyButton.type = 'button';
    copyButton.innerText = 'Copiar';
    copyButton.setAttribute('aria-label', 'Copiar código');

    codeBlock.style.position = 'relative';
    codeBlock.insertBefore(copyButton, codeBlock.firstChild);

    copyButton.addEventListener('click', async function() {
      const codeElement = codeBlock.querySelector('code') || codeBlock.querySelector('pre');
      if (!codeElement) {
        return;
      }

      const code = codeElement.innerText;

      try {
        await window.navigator.clipboard.writeText(code);
        copyButton.innerText = 'Copiado!';
      } catch (error) {
        copyButton.innerText = 'Erro';
        console.error('Falha ao copiar código:', error);
      }

      setTimeout(function() {
        copyButton.innerText = 'Copiar';
      }, 2000);
    });
  });
});
