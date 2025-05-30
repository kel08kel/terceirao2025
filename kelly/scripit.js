document.addEventListener ('DOMContentLoaded', function (){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener ('clik', function (){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});

  diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -=0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
  });
  
  
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
  botaoDeAcessibilidade.addEventListener('click',function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
  })
  const alternaContraste = document.getElementById('alterna-contraste')
alternaContraste.addEventListener('clik', function (){
  document.body.classList.toggle('alto-contraste')
})
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

