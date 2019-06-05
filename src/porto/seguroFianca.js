const axios = require('axios');
const convert = require('xml-js');
const { envelopePesquisar } = require('./suport/xmls');
const envelopToken =
'<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:fil="http://com/porto/arquitetura/api/FileSystemService">'+
   '<soap:Header/>'+
   '<soap:Body>'+
      '<fil:GerarToken>'+
         '<!--Optional:-->'+
         '<fil:request>'+
            '<!--Optional:-->'+
            '<fil:Aplicacao>AluguelPacIntegrationService</fil:Aplicacao>'+
            '<!--Optional:-->'+
            '<fil:CentroCusto>11648</fil:CentroCusto>'+
            '<!--Optional:-->'+
            '<fil:OrigemUtilizacao>GCDE</fil:OrigemUtilizacao>'+
            '<!--Optional:-->'+
            '<fil:TipoUtilizacao>Upload</fil:TipoUtilizacao>'+
         '</fil:request>'+
      '</fil:GerarToken>'+
   '</soap:Body>'+
'</soap:Envelope>';

async function obtemTokenUpload(){

    const response = await axios({
       method:'POST',
        url: 'https://wwws.portoseguro.com.br/FileSystemServiceCorporativo/WSToken/TokenService.asmx',
        headers:{
            Authorization: 'Basic c2xodGRjZXg6emNidmZqNTY=',
            soapAction: 'http://com/porto/arquitetura/api/FileSystemService/GerarToken',
            'Content-Type': 'text/xml'
        },
        data:envelopToken
    });
    const { data } = response;
    const retorno = convert.xml2json(data,{compact:true, spaces:4});
    return JSON.parse(retorno);
}


async function consultaMotivosAlocacao(){
    const responseXml = await axios({
        method: 'POST',
        url: 'https://hml.portoseguro.com.br/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0',
        headers:{
            Authorization:'Basic c2xodGRjZXg6emNidmZqNTY=',
            soapAction: 'http://www.portoseguro.com.br/fiancalocaticia/dominios/v1/pesquisarMotivosLocacao',
            'Content-Type':'text/xml; charset=UTF-8'
        },
        data: envelopePesquisar('PesquisarMotivosLocacaoRequest')
    });
    const {data} = responseXml;
    const json = convert.xml2json(data,{compact: false, spaces:4});

    return  adapterList(JSON.parse(json));
}

async function pesquisar(operacaoPesquisa){
    const responseXml = await axios({
        method: 'POST',
        url: 'https://hml.portoseguro.com.br/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0',
        headers:{
            Authorization:'Basic c2xodGRjZXg6emNidmZqNTY=',
            soapAction: 'http://www.portoseguro.com.br/fiancalocaticia/dominios/v1/pesquisarMotivosLocacao',
            'Content-Type':'text/xml; charset=UTF-8'
        },
        data: envelopePesquisar(operacaoPesquisa)
    });
    const {data} = responseXml;
    const json = convert.xml2json(data,{compact: false, spaces:4});

    return  adapterList(JSON.parse(json));
}

function adapterList(x){
   
     const { elements } = x;
     const array1 = elements.map(item => {
         return [...item.elements];
     });
     const array2 = array1[0].filter(item => item.name.indexOf('soapenv:Body')!==-1).map(item => item.elements);
     const array3 = array2[0].map(item => item.elements);
     const array4 = array3[0].map(item => item.elements)[0].map(item => item.elements);
     const retorno = array4.map(item =>{
        const id= item[0].elements[0].text;
        const value= item[1].elements[0].text;
        return {id,value};
     });
     console.log(retorno);
     return retorno;
    
}
module.exports = {obtemTokenUpload,pesquisar};