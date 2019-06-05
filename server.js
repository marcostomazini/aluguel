const express = require('express')
const app = express();
const seguroFianca = require('./src/porto/seguroFianca');



app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

/**
 * Exemplo: retorna pagina com o changelog do sistema.
 */
app.get('/core/changelog/', (req, res) => {
  res.sendFile('/pages/Changelog.md.html', { root: __dirname })
});

app.get('/core/integracao-porto-seguro/', (req, res) => {
  res.sendFile('/pages/portoSeguro.html', { root: __dirname });
});

app.get('/core/integracao-porto-seguro/WSToken/GerarToken', async (req, res) => {
  const token = await seguroFianca.obtemTokenUpload();
  res.send(token)
});

app.get('/core/integracao-porto-seguro/motivos-locacao', async (req, res) => {

  const motivos = await seguroFianca.pesquisar('PesquisarMotivosLocacaoRequest');
  res.send(motivos)

});

app.get('/core/integracao-porto-seguro/vinculos-empregaticios', async (req, res) => {

  const motivos = await seguroFianca.pesquisar('PesquisarVinculosEmpregaticiosRequest');
  res.send(motivos)

});



// TO DO: criar metodo que retorne arquivo html da integração (o mesmo deverá estar na pasta pages.)



app.listen(process.env.PORT || 3451, () => {
  console.log('Example app listening on port 3451!')
});
