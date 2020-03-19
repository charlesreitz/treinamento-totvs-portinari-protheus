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
1. Primeiro projeto da TOTVS OPENS SOURCE
2. Qualquer um pode ajudar 
3. Qualquer um pode divulgar 
4. Qualquer um pode dar treinamento
5. Sobre Licenças "Software Livre" (https://www.youtube.com/watch?v=FVy1fZhNSDA)


## Mãos na massa!
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

10. Criação do intercept (interceptor.module.ts)

11. Criação do CANACTIVE para bloquear acessos a paginas

12. ngx-cookie-service para salvar os dados nos cookies (https://www.npmjs.com/package/ngx-cookie-service)
``` npm install --save ngx-cookie-service ``` 

13. Criação do CRUD com ReactiveForm

14. Ler um JSON na produção para configurar o local da API (config.json) (config.service.ts)

15. registerLocaleData ptbr

16. NG BUILD

17. Configurando HTTPS e HTTP Serviço Protheus ´

18. Criando os serviços Rest no Prothues 

19. Guia de Boas Práticas para  REST
* https://tdn.totvs.com/display/public/INT/Guia+de+implementacao+das+APIs+TOTVS
* https://api.totvs.com.br/guia


20. Segurança
* JWT
* SSL
* Tratar acesso com MENUDEF +    no Protheus
## Aprendizado contínuo
1. Automatização de teste
2. Docker 
3. DEV-OPS 
4. Internacionalização 
5. Lazy Load no Angular

* Bonus - GIT (code.engpro.com.br) NG SERVENG BUILDComo publicar o projeto * Atualização do PO? * package.json