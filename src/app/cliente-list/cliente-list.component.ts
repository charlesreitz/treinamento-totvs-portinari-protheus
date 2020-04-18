import { ClienteListService } from './cliente-list.service';
import { Component, OnInit } from '@angular/core';
import {
  PoModalAction, PoDisclaimer, PoMultiselectOption, PoInfoOrientation,
  PoDialogService, PoModalComponent, PoTableAction, PoTableColumn,
  PoTableComponent, PoNotificationService, PoToasterOrientation,
  PoPageAction, PoPageFilter, PoButtonComponent, PoBreadcrumb, PoDynamicFormField
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
  public readonly actionsTable: Array<PoTableAction> = [
    {
      label: 'Novo', icon: 'po-icon po-icon-list',
      url: 'cliente-edit'
    }
  ];

  public readonly columns: Array<PoTableColumn> = [
    { property: 'A1_COD', width: '10%', label: 'Código' },
    { property: 'A1_LOJA', width: '40%', label: 'Loja' },
    { property: 'A1_NOME', width: '40%', label: 'Nome' }
  ]

  constructor(private clienteListService: ClienteListService) { }

  ngOnInit() {
    // Para carregar ao entrar na tela
    this.getItems();
  }

  //async 
  async getItems(lShowMore?) {

    if (lShowMore){
      this.page++
    } else {
      this.items = []
    }

    // # Forma 1 #
    //   this.clienteListService.getItems().pipe(take(1)).subscribe(
    //     (data: Array<object>) => {
    //         this.items = data;
    //         this.disableNext = data['disablenext'];
    //     });
    // }

    // # Forma 2 #
    const retorno = await this.clienteListService.getItems(this.page).toPromise();
    // this.items = retorno['items'];
    this.items.push(... retorno['items']);
    this.disableNext = retorno['disablenext'];
    
  }

}
