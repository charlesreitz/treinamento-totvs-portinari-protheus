# Treinamento TOTVS Portinari com ERP TOTVS Microsiga Protheus
Treinamento Portinari com integração com ERP TOTVS Microsiga Protheus 12.1.25 ou superior

##Pré-requisitos
* Conhecimento em HTML
* JavaScriptType Script 
* Angular 8  (https://loiane.training/curso/angular  - Grátis) 
* Protheus - WebService REST
* GIT 
* Fazer os primeiros passos do Portinari (https://portinari.io/guides/getting-started)

##Estrutura Necessária
 * Possuir uma instalação do protheus funcionando na versão 12.1.25 ou superior
 * Possui webservice rest protheus configurado  (https://tdn.totvs.com/pages/viewpage.action?pageId=75268866 ) 
 * NODE instalado na maquina  (https://nodejs.org/en/ ) 
 * NG CLI (https://cli.angular.io/)

##Escopo
1.  Iniciando Projeto com Portinari (https://portinari.io/guides/getting-started)
2.  Bonus - GIT (code.engpro.com.br) NG SERVENG BUILDComo publicar o projeto * Atualização do PO? * package.json


##Lista, fazendo um bolo de fuba (let´s work)
1. Seguir o passo a paso do https://portinari.io/guides/getting-started
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

2. Criando o Componente Long 
``` ng g c login   ```
3. Criando o Serviço login para fazer a comunicação com o backend
```  cd .\src\app\login\  ```
```  ng g s login ``` 
4. Adicionando nosso componente no arquivo de rotas  **app-routing.module.ts**
```     const routes: Routes = [
        { path: '/login', component: LoginComponent, pathMatch: 'full'  },
        ];
``` 
5. Adicionar nosso  ``` <router-outlet></router-outlet>  ``` ** app.component.html** 
```
<div class="po-wrapper">
  <po-toolbar p-title="AppName"></po-toolbar>

  <po-menu [p-menus]="menus"></po-menu>

  <po-page-default p-title="AppName">
    <router-outlet></router-outlet>
  </po-page-default>
</div>
```
6. Adicionar no meno a chamada par ao login ``` app.component.ts ```
```
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Login', link: '\login' }
  ];
```
7. *TIP Adicionar useHash no arquivo ** app-routing.module.ts **
```
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
```


## Aprendizado contínuo
1. Automatização de teste
2. Docker 
3. DEV-OPS 

