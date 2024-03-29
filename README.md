# Treinamento TOTVS Portinari com ERP TOTVS Microsiga Protheus
Ao final do treinamento aluno estará capacitado para montar um portal web com autenticação integrada com o ERP TOTVS Microsiga Protheus. Criando formulários de inclusão, alteração, exclusão e listagem de dados. 


## Pré-requisitos
* Conhecimento em HTML
* Conhecimento CSS
* Conhecimento JavaScript
* Conhecimento Type Script 
* Angular 8  (https://loiane.training/curso/angular  - Grátis) 
* Protheus - WebService REST
* GIT 
* Fazer os primeiros passos do Portinari (https://portinari.io/guides/getting-started)
 * Possuir uma instalação do protheus funcionando na versão 12.1.33 ou superior
 * Possui webservice rest protheus configurado  (https://tdn.totvs.com/pages/viewpage.action?pageId=75268866 ) 
 * NODE instalado na maquina  (https://nodejs.org/en/ ) 
 * NG CLI (https://cli.angular.io/)
* Fazer o treinamento da Universidade TOTVS (https://universidadetotvs.com.br/skin/atena/training/trail/2091) - Opcional

## Escopo
1. Portinari - Criado a tela de LOGIN 
2. Portinari - Criando intercept para enviar o token para a API
3. Portinari - Validando acessos dentro do angular via roteamento 
4. Protheus - Boas Prática de resposta de WebService REST 
5. Portinari - Criado um CRUD no front-end (GET/DELETE/POST/PUT)
6. Portinari - Reactiveform
7. Protheus - Criando serviços do protheus (GET/DELETE/POST/PUT) back-end
8. Protheus - Colocando em produção, publicando projeto, configurando SSL  do Rest Protheus


## Sobre Portinari (Antigo THF)
1. Primeiro projeto da TOTVS OPEN SOURCE
2. Qualquer um pode ajudar 
3. Qualquer um pode divulgar 
4. Qualquer um pode dar treinamento
5. Sobre Licenças "Software Livre" (https://www.youtube.com/watch?v=FVy1fZhNSDA)

## Angular 14 x Node x NG CLI

|Angular CLI|       Angular      |            NodeJS                            |TypeScript |              RxJS Version               |
|-----------|--------------------|------------------------------                |-----------|-----------------------------------------|
|-          |2.x                 |6.0.x or later minor                          |2.0.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.0.6      |4.x                 |6.9.x or later minor                          |2.2.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.1.3      |4.x                 |6.9.x or later minor                          |2.3.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.2.7      |4.x                 |6.9.x or later minor                          |2.3.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.3.2      |4.2.x or later minor|6.9.x or later minor                          |2.4.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.4.10     |4.2.x or later minor|6.9.x/8.9.x or later minor                    |2.4.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|(1.5.6)    |5.0.x               |6.9.x/8.9.x or later minor                    |2.4.x      |5.5.x                                    |
|1.5.6      |5.1.x               |6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|1.6.7      |5.2.x or later minor|6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|1.7.4      |5.2.x or later minor|6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|6.0.8      |6.0.x               |8.9.x or later minor                          |2.7.x      |6.0.x/6.1.x/6.2.x/6.3.x/6.4.x/6.5.x/6.6.x|
|6.1.5      |6.1.x               |8.9.x or later minor                          |2.7.x      |6.2.x/6.3.x/6.4.x/6.5.x/6.6.x            |
|6.2.9      |6.1.x               |8.9.x or later minor                          |2.9.x      |6.2.x/6.3.x/6.4.x/6.5.x/6.6.x            |
|7.0.7      |7.0.x               |8.9.x/10.9.x or later minor                   |3.1.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.1.4      |7.1.x               |8.9.x/10.9.x or later minor                   |3.1.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.2.4      |7.2.x               |8.9.x/10.9.x or later minor                   |3.2.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.3.9      |7.2.x               |8.9.x/10.9.x or later minor                   |3.2.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|8.0.6      |8.0.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.1.3      |8.1.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.2.2      |8.2.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.3.25     |8.2.x               |10.9.x or later minor                         |3.5.x      |6.4.x/6.5.x/6.6.x                        |
|9.0.7      |9.0.7               |10.13.x/12.11.x or later minor                |3.6.x/3.7.x|6.5.x/6.6.x                              |
|9.x        |9.x                 |10.13.x/12.11.x or later minor                |3.6.x-3.8.x|6.5.x/6.6.x                              |
|10.x       |10.x                |10.13.x/12.11.x or later minor                |3.9.x      |6.5.x/6.6.x                              |
|10.1.x     |10.1.x              |10.13.x/12.11.x or later minor                |3.9.x/4.0.x|6.6.x                                    |
|10.2.x     |10.2.x              |10.13.x/12.11.x or later minor                |3.9.x/4.0.x|6.6.x                                    |
|11.0.7     |11.0.x              |10.13.x/12.11.x or later minor                |4.0.x      |6.6.x                                    |
|11.1.x     |11.1.x              |10.13.x/12.11.x or later minor                |4.0.x/4.1.x|6.6.x                                    |
|11.2.x     |11.2.x              |10.13.x/12.11.x or later minor                |4.0.x/4.1.x|6.6.x                                    |
|12.0.x     |12.0.x              |12.14.x/14.15.x or later minor                |4.2.x      |6.6.x                                    |
|12.1.x     |12.1.x              |12.14.x/14.15.x or later minor                |4.2.x/4.3.x|6.6.x                                    |
|12.2.x     |12.2.x              |12.14.x/14.15.x or later minor                |4.2.x/4.3.x|6.6.x/7.0.x or later minor version       |
|13.0.x     |13.0.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x      |6.6.x/7.4.x or later minor version       |
|13.1.x     |13.1.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.5.x|6.6.x/7.4.x or later minor version       |
|13.2.x     |13.2.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.5.x|6.6.x/7.4.x or later minor version       |
|13.3.x     |13.3.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.7.x|6.6.x/7.4.x or later minor version       |
|14.0.x     |14.0.x              |14.15.x/^16.10.x or later minor version       |4.6.x/4.8.x|6.6.x/7.4.x or later minor version       |
|-----------|--------------------|----------------------------------------------|-----------|-----------------------------------------|

## Anglar x Boas Práticas
* Existe diversos materiais sobre práticas no angular que devem ser consultados para melhor evolução pessoal. 
 * https://andrewrosario.medium.com/padr%C3%B5es-e-boas-pr%C3%A1ticas-em-angular-que-te-ajudar%C3%A3o-a-escalar-5001e544e7de
 * https://github.com/andrewarosario/angular-padroes-e-boas-praticas
 * https://www.linkedin.com/pulse/angular-estrutura-boas-pr%C3%A1ticas-e-readme-rayane-pimentel/?trk=articles_directory&originalSubdomain=pt

## ESLINT 
O ESLint é uma ferramenta de análise de código que, juntamente com a sua extensão de mesmo nome disponível no VSCode, permite identificar erros quanto ao padrão de escrita que definimos. Com ele você pode, por exemplo, definir que no seu código JavaScript as sentenças sempre terminarão com ponto e vírgula o que após o último elemento de um array sempre terá uma vírgula.

ng add @angular-eslint/schematics

## HTTPS
HTTPS é de suma importância para segurança dos dados entre o CLIENT (navegador) e o Servidor (API) 

## Como tratar permissões 
* Criando uma controle seu, via tabelas e liberações 
* Utilizar o conceito de privilégios do protheus

## Senhas 
* Senhas salvas no banco de dados devem ser criptografadas
* Formas de autenticação, BASIC, JWT

## Guia de Boas Práticas para  REST
* https://tdn.totvs.com/display/public/INT/Guia+de+implementacao+das+APIs+TOTVS
* https://api.totvs.com.br/guia

## Testes 
* Pirâmide de testes
  * E2E
  * Serviço 
  * Unitário 
* Cobertura de Código

* https://medium.com/creditas-tech/a-pir%C3%A2mide-de-testes-a0faec465cc2

## Aprendizado contínuo
1. Automatização de teste
2. Docker 
3. DEV-OPS 
4. Internacionalização 
5. Lazy Load no Angular

## Se der tempo
* Bônus - GIT (code.engpro.com.br) NG SERVENG BUILDComo publicar o projeto * Atualização do PO? * package.json
* Ler um JSON na produção para configurar o local da API (config.json) (config.service.ts)
* Adicionar a lista de contatos quando estiver alterando e incluindo um cliente
* Tratar acesso com MENUDEF +    no Protheus

## Hands-on! (Mãos na massa!)
1. Extensões para o VS CODE 

* https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
* https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics
* https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
* https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
* https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter 
* https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug 
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint 
* https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory 
* https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion 
* https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf
* https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree 
* https://marketplace.visualstudio.com/items?itemName=totvs.tds-vscode

2. Seguir o passo a paso do https://portinari.io/guides/getting-started
  a. npm i -g @angular/cli@14
  b. ng new my-po-project --skipInstall
    ```
    "dependencies": {
        "@angular/animations": "^14.2.0",
        "@angular/common": "^14.2.0",
        "@angular/compiler": "^14.2.0",
        "@angular/core": "^14.2.0",
        "@angular/forms": "^14.2.0",
        "@angular/platform-browser": "^14.2.0",
        "@angular/platform-browser-dynamic": "^14.2.0",
        "@angular/router": "^14.2.0",
        "@po-ui/ng-components": "^14.9.0",
        "@po-ui/ng-templates": "^14.9.1",
        "@totvs/po-theme": "^14.9.1",
        "rxjs": "~7.5.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.11.4"
    }
    ```
    c. ```npm install```
    d. ```ng add @po-ui/portinari-ui```
    e. ```npm i --save @po-ui/portinari-templates```
    f. E depois adicionar o PoTemplatesModule no módulo principal (app.module.ts) da sua aplicação 
    g. ```ng serve```
    h. Utilizando o tema da TOTVS no portinari (https://github.com/totvs/po-theme-totvse) -> ```npm i @totvs/po-theme --save```
    i. em seguida, atualize o arquivo **angular.json** para utilizar o tema. 
        ```
        "styles": [
        "node_modules/@totvs/po-theme/css/po-theme-default-variables.min.css",
        "node_modules/@totvs/po-theme/css/po-theme-default.min.css",
         "node_modules/@po-ui/style/css/po-theme-core.min.css",
        ]
        ```
        Tema do portinari: "./node_modules/@portinari/style/css/po-theme-default.min.css",

3. Criando o Componente Login
``` ng g c login   ```

4. Criando o Serviço login para fazer a comunicação com o backend
```  cd .\src\app\login\  ```
```  ng g s login ``` 

5. Adicionando nosso componente no arquivo de rotas  **app-routing.module.ts**
```     const routes: Routes = [
        { path: '/login', component: LoginComponent, pathMatch: 'full'  },
        ];
``` 

6. Adicionar nosso  ``` <router-outlet></router-outlet>  ``` ** app.component.html** 
```
<div class="po-wrapper">
  <po-toolbar p-title="AppName"></po-toolbar>

  <po-menu [p-menus]="menus"></po-menu>

  <po-page-default p-title="AppName">
    <router-outlet></router-outlet>
  </po-page-default>
</div>
```

7. Adicionar no menu a chamada par ao login ``` app.component.ts ```
```
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Login', link: '\login' }
  ];
```

8. *TIP Adicionar useHash no arquivo ** app-routing.module.ts **
```
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
```

9. Criação dos serviços de login e chamadas das rotinas de autenticação

10. Criação do modulo intercept  (interceptor.module.ts)
 ``` ng g m interceptor ```

* TIP: https://po-ui.io/documentation/po-http-interceptor

11. Criação do CANACTIVE para bloquear acessos a paginas

12. Criação do CRUD com ReactiveForm

* https://medium.com/totvsdevelopers/criando-um-crud-com-thf-iniciando-o-projeto-2bb79138eea6
- Criação de pai e filho

13. registerLocaleData ptbr

14. Fazer build do projeto e subir para base de produção. NG BUILD 

15. Configurando HTTPS e HTTP Serviço Protheus 
* Redirecionamento de portas NAT
* DMZ x Infraestrutura X Segurança
* TLS 1.2
* Demora em rotinas padrões, exemplo pedido de venda, colocar em um JOB para fazer o processamento ao invés de incluir direto. 
* Deixar rápido para o usuário da ponta, não fazer ele esperar

```
[environment]
SourcePath=C:\TOTVS 12\Microsiga\Protheus\apo\resttemp
RootPath=C:\TOTVS 12\Microsiga\Protheus_Data
StartPath=\sigapci\
x2_path=
RpoDb=Top
RpoLanguage=portuguese
RpoVersion=120
LocalFiles=CTREE
Trace=0
localdbextension=.dtc
PictFormat=DEFAULT
DateFormat=DEFAULT
TopDatabase=MSSQL
TopServer=192.168.1.205
TopAlias=PCIODBC
RegionalLanguage=BRA
helpserver=192.168.1.204:89
TopMemoMega=10
FWTRACELOG=0
FORMPATH=C:\TOTVS 12\Microsiga\Protheus\apo\apo_rh_formulas
SpecialKey=prd

[Drivers]
Active=TCP

[TCP]
TYPE=TCPIP
Port=10092

[General]
InstallPath=C:\TOTVS 12\Microsiga\Protheus
Consolelog=1
MAXSTRINGSIZE=10
BuildKillUsers=1
LogTimeStamp=1
AsyncMaxFiles=15
ConsoleMaxSize=10485760

[LICENSECLIENT]
enable=1
server=192.168.1.204
port=5551

[Service]
Name=TOTVSAPPSERVER12RESTHTTP
Displayname=.TOTVS | Appserver - Rest HTTP 


;##########################################33
;configuracao do http e https
;##########################################33
[HTTP]
ENABLE=0
PORT=56649
PATH=C:\TOTVS 12\Microsiga\protheus_data\web\cliente_tmp
UPLOADPATH=\web\cliente
HSTSEnable=1
HSTSIncludeSubDomains=1
HSTSMaxAge=31536000
;Compression=1
;ENABLEHTTPPROT=1
;TIMEMSHTTPPROT=100
;XFrameOptions=SAME
;EnableCors=1
;AllowOrigin=*
DEFAULTPAGE=index.html
;Cache-control=no-store
;Pragma=no-cache
;LogResponse=1
;LogRequest=1
;LogTimeStamp=1

[HTTPS]
ENABLE=1
PORT=56649
SecureCookie=1

[SSLConfigure]
SECURITY=1
;disableCipher=RC4:CBC
VERBOSE=0
Debug=0
SSL1=1
SSL2=1
SSL3=1
State=1
TLS1_0=1
TLS1_1=1
TLS1_2=1
HSM=0
Bugs=1
CertificateServer   =C:\TOTVS 12\Microsiga\Protheus\bin\appserverHTTPRest\certificado\server.crt
KeyServer           =C:\TOTVS 12\Microsiga\Protheus\bin\appserverHTTPRest\certificado\server.key
PassPhrase          =123
;https://tdn.totvs.com/display/tec/DisableCipher

;##########################################33
;configuracao do rest
;##########################################33
[HTTPV11]
Enable=1
Sockets=HTTPREST

[HTTPREST]
Port=56650
URIs=HTTPURI
SECURITY=1
VERBOSE=0
;SSL2=1
SSL3=1
TLS1=3
Bugs=1
State=1


[HTTPURI]
URL=/
PrepareIn=A1,01
Instances=2,2
CORSEnable=1
AllowOrigin=https://cliente.actvs.com.br:56649
Public=PCIClienteAuth,PCIClienteOrdemServico,PCIClienteUsers,PCIClienteDashBoard,PCIClienteTitulos,PCIClienteProjetos,PCIClienteContratos

[HTTPJOB]
MAIN=HTTP_START
ENVIRONMENT=environment

;##########################
;CONFIGURACAO DE JOBS
;##########################
[ONSTART]
jobs=HTTPJOB
RefreshRate=10
DebugMsg=0


```


17. Tag tenantId  para buscar dados de filiais - https://tdn.totvs.com/display/framework/02.+REST+com+ERP+Microsiga+Protheus


## Update do Angular 
https://update.angular.io/


## Lib's de Terceiro - Atenção 
Cuidado ao instalar lib de terceiros no front-end, em futuras atualização será necessário compatibilizar essa LIB de terceiro. 


## 2 Parte do Treinamento 


* ReactiveForm
  * Pai e Filho 
  * Validações Avançadas
  * Gatilhos
  * Auto Save
  * Validações com REGEX 
* Componentes
  * Gráficos 
    * Area
    * Donut
    * Pie
    * Line
    * Column
    * Bar
  * Barra de Progress
* Montagem de um Dashboard 
* Criando uma autenticação JWT com ADVPL 
* Atualização do Projeto Angular e PO-UI
