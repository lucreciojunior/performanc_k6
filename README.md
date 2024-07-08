
<p align="center">
  <img src="./imagem/k6photo.png" alt="Alt Text">
</p>
<div align="center">

  <h1>TESTE DE PERFORMANCE E CARGA COM K6</h1>
</div>

## PRÉ-REQUISITOS
Requisitos de software e hardware necessários para executar este projeto de testes com K6


* [Baixar versão do K6](https://k6.io/docs/get-started/installation/ "k6")
* Biblioteca [UUID](https://grafana.com/docs/k6/latest/examples/generating-uuids/ "gerar dados ") para gerar dados dinamicos 
* k6 - Report HTML [Rport HTML](https://github.com/benc-uk/k6-reporter "gerar dados ")  
* [Vs Code](https://code.visualstudio.com/download) IDE

## INSTALANDO DEPEDENCIAs UUID

Comando para instalar via NPM a biblioteca onde gera os dados dinamicos de e-mail.

```sh default
npm install uuid@3.4.0
npm install browserify - Para depois roda o browserify
```


## COMANDO PARA EXECUTAR OS TESTES

Com o prompt de comando acesse a pasta do projeto e execute o comando abaixo para rodar os testes automatizados.

```sh default
k6 run test.js
```

## COMANDO PARA EXECUÇÃO DE TESTES COM VARIOS USUÁRIOS

Com o prompt de comando acesse a pasta do projeto e execute o comando abaixo para rodar um cenário com a tag específica.

Ex.:
```sh default
k6 run teste.js --vus 10 --duration 20s
```

## EVIDÊNCIAS
Os arquivos com as evidências ficam localizados dentro do projeto com o nome `report` onde vamos ter evidenciado um html com os dados e metricas dos testes.
