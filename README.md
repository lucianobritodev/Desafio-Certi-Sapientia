# Desafio Cert Sapienta

## Descrição

Desafio de criação de aplicação server side com apenas um endpoint para o método GET recebendo um número como argumento com o fim de retorná-lo por extenso em um objeto JSON.

Os números aceitos poder ser positivos ou negativos.

## Execução

*OBS.:* Para executar a aplicação é necessário ter o NodeJS versão 14.15.4 e o npm versão 6.14.10 ou superiores instalados em sua máquina.

*Passo 1:* Baixe o arquivo zip do projeto ou faça um clone para sua máquina.

*Passo 2:* entre na pasta do projeto que foi descompactada e abra um terminal, no caso de distros Linux ou MAC, caso seja Windows abra um CMD ou Powershell.

*Passo 3:* Digite os seguintes comandos no terminal:

```
$ npm install
```
E depois:

```
$ npm start
```
Clique na url que aparecerá na tela do terminal ou cole-a no navegador.

Para efetuar o teste de fato basta colocar logo após os parâmetros da url 'http://localhost:3000/[numero para teste]'

Exemplo com números positivos e negativos respectivamente:

```
$ http://localhost:3000/94587
```

```
$ http://localhost:3000/-1042
```
