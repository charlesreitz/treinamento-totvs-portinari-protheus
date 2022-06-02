# Treinamento TOTVS Portinari com ERP TOTVS Microsiga Protheus
Ao final do treinamento aluno estará capacitada para montar um portal web com autenticação integrada com o ERP TOTVS Microsiga Protheus. Criando formulários de inclusão, alteração, exclusão e listagem de dados. 


## Pré-requisitos
* Conhecimento em HTML
* JavaScriptType Script 
* Angular 8  (https://loiane.training/curso/angular  - Grátis) 
* Protheus - WebService REST
* GIT 
* Fazer os primeiros passos do Portinari (https://portinari.io/guides/getting-started)
 * Possuir uma instalação do protheus funcionando na versão 12.1.25 ou superior
 * Possui webservice rest protheus configurado  (https://tdn.totvs.com/pages/viewpage.action?pageId=75268866 ) 
 * NODE instalado na maquina  (https://nodejs.org/en/ ) 
 * NG CLI (https://cli.angular.io/)

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


## Hands-on! (Mãos na massa!)
1. Extensões para o VS CODE 

* https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
* https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
* https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter
* https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
* https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug
* https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight
* https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree
* https://marketplace.visualstudio.com/items?itemName=totvs.tds-vscode
* https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2


2. Seguir o passo a paso do https://portinari.io/guides/getting-started
  a. npm i -g @angular/cli@8.0.0
  b. ng new my-po-project --skipInstall
    ```
    "dependencies": {
        "@angular/animations": "~8.0.0",
        "@angular/common": "~8.0.0",
        "@angular/compiler": "~8.0.0",
        "@angular/core": "~8.0.0",
        "@angular/forms": "~8.0.0",
        "@angular/platform-browser": "~8.0.0",
        "@angular/platform-browser-dynamic": "~8.0.0",
        "@angular/platform-server": "~8.0.0",
        "@angular/router": "~8.0.0",
        "rxjs": "~6.4.0",
        "zone.js": "~0.9.1"
        ...
    }
    ```
    c. ```npm install```
    d. ```ng add @portinari/portinari-ui```
    e. ```npm i --save @portinari/portinari-templates```
    f. E depois adicionar o PoTemplatesModule no módulo principal (app.module.ts) da sua aplicação 
    g. ```ng serve```
    h. Utilizando o tema da TOTVS no portinari (https://thf.totvs.com.br/home) -> ```npm i --save @totvs/portinari-theme```
    i. em seguida, atualize o arquivo **angular.json** para utilizar o tema. 
        ```
        "styles": [
        "node_modules/@totvs/portinari-theme/css/po-theme-default.min.css"
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

12. ngx-cookie-service para salvar os dados nos cookies (https://www.npmjs.com/package/ngx-cookie-service)
``` npm install --save ngx-cookie-service ``` 
  - Atualizado: Não usamos mais esse serviço pois utilizamos o localstorage

13. Criação do CRUD com ReactiveForm

* https://medium.com/totvsdevelopers/criando-um-crud-com-thf-iniciando-o-projeto-2bb79138eea6
- Criação de pai e filho

15. registerLocaleData ptbr

16. Fazer build do projeto e subir para base de produção. NG BUILD 

17. Configurando HTTPS e HTTP Serviço Protheus 
* Redirecionamento de portas NAT
* DMZ x Infraestrutura X Segurança
* TLS 1.2
* Demora em rotinas padrões, exemplo pedido de venda, colocar em um JOB para fazer o processamento ao invés de incluir direto. 
* Deixar rápido para o usuário da ponta, não fazer ele esperar
* Problema no Safari (envia a requisição 2 vezes - ISSUE aberta na TOTVS)

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

19. Guia de Boas Práticas para  REST
* https://tdn.totvs.com/display/public/INT/Guia+de+implementacao+das+APIs+TOTVS
* https://api.totvs.com.br/guia

20. Tag tenantId  para buscar dados de filiais - https://tdn.totvs.com/display/framework/02.+REST+com+ERP+Microsiga+Protheus



## Aprendizado contínuo
1. Automatização de teste
2. Docker 
3. DEV-OPS 
4. Internacionalização 
5. Lazy Load no Angular

## Se der tempo
* Bonus - GIT (code.engpro.com.br) NG SERVENG BUILDComo publicar o projeto * Atualização do PO? * package.json
* Ler um JSON na produção para configurar o local da API (config.json) (config.service.ts)
* Adicionar a lista de contatos quando estiver alterando e incluindo um cliente
* Tratar acesso com MENUDEF +    no Protheus
