
// const {Pretendente} = require('./model/Objetos');

const uploadArquivo =(token="",nomeArquivo="anexo.jpg",conteudoBase64="",codigoDasChaves="numpac", codigoUsuario="S18562", valoresDasChaves= "109339",tipoDocumento="127") => '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">'+
'<soap:Header/>'+
'<soap:Body>'+
   '<tem:GcdeGravarArquivo>'+
      '<tem:request>'+
          `<tem:Token>${token}</tem:Token>`+
         '<tem:CallbackUrl></tem:CallbackUrl>'+
         '<tem:CallbackUrlParameters></tem:CallbackUrlParameters>'+
         `<tem:NomeArquivo>${nomeArquivo}</tem:NomeArquivo>`+
         `<tem:ConteudoBase64>${conteudoBase64}</tem:ConteudoBase64>`+
         `<tem:CodigoUsuario>${codigoUsuario}</tem:CodigoUsuario>`+
         `<tem:CodigoDasChaves>${codigoDasChaves}</tem:CodigoDasChaves>`+
         `<tem:ValoresDasChaves>${valoresDasChaves}</tem:ValoresDasChaves>`+
         `<tem:TipoDocumento>${tipoDocumento}</tem:TipoDocumento>`+
      '</tem:request>'+
   '</tem:GcdeGravarArquivo>'+
'</soap:Body>'+
'</soap:Envelope>';

const reservarPac=() =>'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">'+
'<soapenv:Header/>'+
'<soapenv:Body/>'+
'</soapenv:Envelope>';

const realizarAnalise = ( pac, pretendente, imovel, parceiro ) =>{
    
   return('<v1:RealizarAnalise>'+
           '<pac>'+
           `<origem>${pac.origem}</origem>`+
           `<numero>${pac.numero}</numero>`+
           '</pac>'+
           '<pretendentes>'+
           '<pretendente>'+
               `<cpf>${pretendente.cpf}</cpf>`+
               `<nome>${pretendente.nome}</nome>`+
               `<dataNascimento>${pretendente.dataNascimento}</dataNascimento>`+
               `<pretendenteFinanceiro>${pretendente.pretendenteFinanceiro}</pretendenteFinanceiro>`+
               `<emancipado>${pretendente.emancipado}</emancipado>`+
               '<telefones>'+
                   '<telefone>'+
                       `<ddd>${pretendente.telefone.ddd}</ddd>`+
                       `<numero>${pretendente.telefone.numero}</numero>`+
                       `<ramal>${pretendente.telefone.ramal}</ramal>`+
                       `<tipoTelefone>${pretendente.telefone.tipoTelefone}</tipoTelefone>`+
                   '</telefone>'+
               '</telefones>'+
               `<tipoPretendente>${pretendente.tipoPretendente}</tipoPretendente>`+
               `<estadoCivil>${pretendente.estadoCivil}</estadoCivil>`+
               `<cpfConjuge>${pretendente.cpfConjuge}</cpfConjuge>`+
               `<email>${pretendente.email}</email>`+
               '<informacaoProfissional>'+
                   '<vinculoEmpregaticio>'+
                       `<codigo>${pretendente.informacaoProfissional.codigoVinculoEmpregaticio}</codigo>`+
                   '</vinculoEmpregaticio>'+
                   `<empresa>${pretendente.informacaoProfissional.empresa}</empresa>`+
                   '<telefoneLocalTrabalho>'+
                       `<ddd>${pretendente.informacaoProfissional.telefoneLocalTrabalho.ddd}</ddd>`+
                       `<numero>${pretendente.informacaoProfissional.telefoneLocalTrabalho.numero}</numero>`+
                       `<ramal>${pretendente.informacaoProfissional.telefoneLocalTrabalho.ramal}</ramal>`+
                       `<tipoTelefone>${pretendente.informacaoProfissional.telefoneLocalTrabalho.tipoTelefone}</tipoTelefone>`+
                   '</telefoneLocalTrabalho>'+
                   `<salario>${pretendente.informacaoProfissional.salario}</salario>`+
                   `<outrosRendimentos>${pretendente.informacaoProfissional.outrosRendimentos}</outrosRendimentos>`+
               '</informacaoProfissional>'+
               '<residenciaAtualPretendente>'+
                   `<cep>${pretendente.endereco.cep}</cep>`+
               '</residenciaAtualPretendente>'+
           '</pretendente>'+
           '</pretendentes>'+
           '<imovelPretendido>'+
           `<tipoImovel>${imovel.tipoImovel}</tipoImovel>`+
           '<motivoLocacao>'+
               `<codigo>${imovel.motivoLocacaoCodigo}</codigo>`+
           '</motivoLocacao>'+
           '<endereco>'+
               `<cep>${imovel.endereco.cep}</cep>`+
           '</endereco>'+
           `<valorAluguel>${imovel.valorAluguel}</valorAluguel>`+
           `<valorCondominio>${imovel.valorCondominio}</valorCondominio>`+
           `<valorLuz>${imovel.valorLuz}</valorLuz>`+
           `<valorIPTU>${imovel.valorIPTU}</valorIPTU>`+
           `<valorAgua>${imovel.valorAgua}</valorAgua>`+
           `<valorGas>${imovel.valorGas}</valorGas>`+
           '</imovelPretendido>'+
           '<parceiro>'+
           `<susep>${parceiro.susep}</susep>`+
           `<imobiliaria>${parceiro.imobiliaria}</imobiliaria>`+
           `<codigo>${parceiro.codigo}</codigo>`+
           '</parceiro>'+
           '<arquivosUpload>'+
           '<arquivoUpload>'+
               '<uploadID>?</uploadID>'+
               '<nome>?</nome>'+
               '<tipo>?</tipo>'+
           '</arquivoUpload>'+
           '</arquivosUpload>'+
           '</v1:RealizarAnalise>')};

const pesquisarImobiliarias=() =>'<v1:PesquisarImobiliarias>'+
'<Imobiliaria>'+
   '<codigo></codigo>'+
   '<nome>Lello</nome>'+
'</Imobiliaria>'+
'</v1:PesquisarImobiliarias>';

const envelopePesquisar = (operacao) =>
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://www.portoseguro.com.br/fiancalocaticia/dominios/v1/types">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      `<typ:${operacao}/>`+
   '</soapenv:Body>'+
'</soapenv:Envelope>';

const calcularOrcamentoSemPac = () =>'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="http://www.portoseguro.com.br/fiancalocaticia/CalculoOrcamentoWebService/v1">'+
'<soapenv:Header/>'+
'<soapenv:Body>'+
   '<v1:calculoFiancaSemPAC>'+
      '<finalidadeLocacao>?</finalidadeLocacao>'+
      '<listaPretendentes>'+
         '<!--1 or more repetitions:-->'+
         '<pretendentes>'+
            '<numeroCPFCNPJ>?</numeroCPFCNPJ>'+
            '<nome>?</nome>'+
            '<flagResideNoImovel>?</flagResideNoImovel>'+
            '<vinculoEmpregaticio>'+
               '<codigoVinculo>?</codigoVinculo>'+
               '<descricaoVinculo>?</descricaoVinculo>'+
            '</vinculoEmpregaticio>'+
            '<estadoCivil>?</estadoCivil>'+
            '<valorRenda>?</valorRenda>'+
         '</pretendentes>'+
      '</listaPretendentes>'+
      '<tipoImovel>?</tipoImovel>'+
      '<numeroCEP>?</numeroCEP>'+
      '<susep>?</susep>'+
      '<susepLider>?</susepLider>'+
      '<produto>?</produto>'+
      '<dataInicioVigencia>?</dataInicioVigencia>'+
      '<dataFimVigencia>?</dataFimVigencia>'+
      '<codigoOperacao>?</codigoOperacao>'+
      '<exibirCodigoOperacao>?</exibirCodigoOperacao>'+
      '<imobiliariaCadastrada>?</imobiliariaCadastrada>'+
      '<imobiliaria>'+
         '<codigoImobiliaria>?</codigoImobiliaria>'+
         '<nomeImobiliaria>?</nomeImobiliaria>'+
      '</imobiliaria>'+
      '<coberturas>'+
         '<valorCoberturaAluguel>?</valorCoberturaAluguel>'+
         '<valorCoberturaCondominio>?</valorCoberturaCondominio>'+
         '<valorCoberturaLuz>?</valorCoberturaLuz>'+
         '<valorCoberturaIPTU>?</valorCoberturaIPTU>'+
         '<valorCoberturaAgua>?</valorCoberturaAgua>'+
         '<valorCoberturaGasCanalizado>?</valorCoberturaGasCanalizado>'+
         '<coberturaPinturaInterna>?</coberturaPinturaInterna>'+
         '<coberturaPinturaExterna>?</coberturaPinturaExterna>'+
         '<coberturaDanosAoImovel>?</coberturaDanosAoImovel>'+
         '<coberturaMultaPorRescisao>?</coberturaMultaPorRescisao>'+
      '</coberturas>'+
   '</v1:calculoFiancaSemPAC>'+
'</soapenv:Body>'+
'</soapenv:Envelope>';

const calcularOrcamentoComPac=() =>
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="http://www.portoseguro.com.br/fiancalocaticia/CalculoOrcamentoWebService/v1">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      '<v1:calculoFiancaSemPAC>'+
         '<finalidadeLocacao>?</finalidadeLocacao>'+
         '<listaPretendentes>'+
            '<!--1 or more repetitions:-->'+
            '<pretendentes>'+
               '<numeroCPFCNPJ>?</numeroCPFCNPJ>'+
               '<nome>?</nome>'+
               '<flagResideNoImovel>?</flagResideNoImovel>'+
               '<vinculoEmpregaticio>'+
                  '<codigoVinculo>?</codigoVinculo>'+
                  '<descricaoVinculo>?</descricaoVinculo>'+
               '</vinculoEmpregaticio>'+
               '<estadoCivil>?</estadoCivil>'+
               '<valorRenda>?</valorRenda>'+
            '</pretendentes>'+
         '</listaPretendentes>'+
         '<tipoImovel>?</tipoImovel>'+
         '<numeroCEP>?</numeroCEP>'+
         '<susep>?</susep>'+
         '<susepLider>?</susepLider>'+
         '<produto>?</produto>'+
         '<dataInicioVigencia>?</dataInicioVigencia>'+
         '<dataFimVigencia>?</dataFimVigencia>'+
         '<codigoOperacao>?</codigoOperacao>'+
         '<exibirCodigoOperacao>?</exibirCodigoOperacao>'+
         '<imobiliariaCadastrada>?</imobiliariaCadastrada>'+
         '<imobiliaria>'+
            '<codigoImobiliaria>?</codigoImobiliaria>'+
            '<nomeImobiliaria>?</nomeImobiliaria>'+
         '</imobiliaria>'+
         '<coberturas>'+
            '<valorCoberturaAluguel>?</valorCoberturaAluguel>'+
            '<valorCoberturaCondominio>?</valorCoberturaCondominio>'+
            '<valorCoberturaLuz>?</valorCoberturaLuz>'+
            '<valorCoberturaIPTU>?</valorCoberturaIPTU>'+
            '<valorCoberturaAgua>?</valorCoberturaAgua>'+
            '<valorCoberturaGasCanalizado>?</valorCoberturaGasCanalizado>'+
            '<coberturaPinturaInterna>?</coberturaPinturaInterna>'+
            '<coberturaPinturaExterna>?</coberturaPinturaExterna>'+
            '<coberturaDanosAoImovel>?</coberturaDanosAoImovel>'+
            '<coberturaMultaPorRescisao>?</coberturaMultaPorRescisao>'+
         '</coberturas>'+
      '</v1:calculoFiancaSemPAC>'+
   '</soapenv:Body>'+
'</soapenv:Envelope>';

module.exports={ uploadArquivo, reservarPac, realizarAnalise, pesquisarImobiliarias, calcularOrcamentoComPac, calcularOrcamentoSemPac, envelopePesquisar}