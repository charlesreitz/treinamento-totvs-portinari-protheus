import { Router } from '@angular/router';
import { ClienteListService } from './cliente-list.service';
import { Component, OnInit } from '@angular/core';
import {
  PoDialogService, PoTableColumn,
  PoTableComponent, PoNotificationService,
  PoPageAction, PoBreadcrumb
} from '@portinari/portinari-ui';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  public items = [];
  public page = 1;
  public disableNext = false;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', action: () => { this.router.navigate(['/client-edit']) }, icon: 'po-icon-plus' },

  ];
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Clientes' }]
  };
  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'A1_MSBLQL',
      label: 'Status',
      width: '10%',
      type: 'label',
      labels: [
        { value: '1', color: 'color-07', label: 'Inativo' },
        { value: '2', color: 'color-10', label: 'Ativo' }
      ]
    },
    { property: 'A1_COD', width: '10%', label: 'Código' },
    { property: 'A1_LOJA', width: '30%', label: 'Loja' },
    { property: 'A1_NOME', width: '40%', label: 'Nome' },
    {
      property: 'ACAO',
      label: 'Ação',
      type: 'icon',
      icons: [
        {
          action: this.alterar.bind(this),

          icon: 'po-icon-edit',
          tooltip: 'Alterar',
          value: 'alterar'
        },
        {
          action: this.excluir.bind(this),
          color: 'color-07',
          icon: 'po-icon-delete',
          tooltip: 'Excluir',
          value: 'excluir'
        }]
    }
  ]

  constructor(private clienteListService: ClienteListService,
    private poDialog: PoDialogService,
    public router: Router,
    private poNotification: PoNotificationService,
  ) { }

  ngOnInit() {
    // Para carregar ao entrar na tela
    this.getItems();
  }


  async getItems(lShowMore?) {

    if (lShowMore) {
      this.page++
    } else {
      this.items = []
    }

    const retorno = await this.clienteListService
      .get(this.page).toPromise();

    this.items.push(...retorno['items']);
    this.disableNext = retorno['disablenext'];

  }

  alterar(param) {
    this.router.navigate([`/client-edit/${param.A1_COD}/${param.A1_LOJA}`]);

  }
  excluir(linhaTabela) {
    this.poDialog.confirm({
      literals: { cancel: 'Mudei de Idéia', confirm: 'Dale!' },
      title: `Exclusão de cliente`,
      message: 'Você tem certeza, certeza, certeza, certeza absoluta ? Certeza mesmo? Não quer repensar sua vida?  ',
      confirm: async () => {
        const retorno = await this.clienteListService.delete(linhaTabela.A1_COD, linhaTabela.A1_LOJA).toPromise();
        this.poNotification.success({ message: `Cliente excluido com sucesso` });

        // Remove da linha sem precisa consultar novamente o servidor, 
        // ou poderia ter chamado a funcao 'this.getItems()' para atualizar nossa tabela
        this.items.forEach((item, index) => {
          if (linhaTabela.A1_COD + linhaTabela.A1_LOJA === item.A1_COD + item.A1_LOJA) {
            this.items.splice(index, 1);
          }
        });



      },
    }
    );
  }

}
