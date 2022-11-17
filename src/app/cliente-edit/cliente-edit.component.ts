import { ClienteEditService } from './cliente-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PoModalComponent, PoPageAction, PoTableAction, PoTableColumn, PoBreadcrumb, PoNotificationService, PoTableDetail } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, UntypedFormArray, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { firstValueFrom, lastValueFrom, take } from 'rxjs';


@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  public items = [];
  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'ZZK_MSBLQL',
      label: 'Status',
      width: '10%',
      type: 'label',
      labels: [
        { value: '1', color: 'color-07', label: 'Inativo' },
        { value: '2', color: 'color-10', label: 'Ativo' }
      ]
    },
    { property: 'ZZK_NOME', width: '10%', label: 'Nome' },
    //{ property: 'ZZK_CLIENT', width: '10%', label: 'Cliente' },
    //{ property: 'ZZK_LOJA', width: '10%', label: 'Loja' },
    { property: 'ZZK_SEQ', width: '10%', label: 'Seq.' },
    { property: 'ZZK_OBS', width: '10%', label: 'Obs' },
    {
      property: 'ACAO',
      label: 'Ação',
      type: 'icon',
      icons: [
        {
          action: this.setItemRemover.bind(this),
          color: 'color-07',
          icon: 'po-icon-delete',
          tooltip: 'Excluir',
          value: 'excluir'
        }]
    }
  ]

  public actionsTable: Array<PoTableAction> = [
    {
      action: this.setItemRemover.bind(this),
      icon: 'po-icon-delete',
      label: ''
    }
  ];

  //@ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;
  public A1_COD: string = '';
  public A1_LOJA: string = '';
  public reactiveForm = this.createReactiveForm();
  public addItemForm = this.createReactiveFormItem();
  public buttonDisable = false;
  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: () => { this.saveForm() }, disabled: this.buttonDisable },
    { label: 'Cancelar', action: () => { this.router.navigate(['/client-list']) } },

  ];
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' },
    { label: 'Clientes', link: '/client-list' },
    { label: 'Edição ' }
    ]
  };

  constructor(private fb: FormBuilder,
    private routeActive: ActivatedRoute,
    private router: Router,
    private poNotification: PoNotificationService,
    private clienteEditService: ClienteEditService) {

  }

  ngOnInit() {

    this.routeActive.params.subscribe(async (params: any) => {
      if (params.A1_COD) {
        const retorno = await this.clienteEditService.getId(params.A1_COD, params.A1_LOJA).pipe(take(1)).subscribe((retorno: any) => {

          this.reactiveForm.patchValue(retorno);

          for (let i = 0; i < retorno[`ITEMS`].length; i++) {
            const control = <FormArray>this.reactiveForm.get('ITEMS');
            control.push(this.fb.group(retorno[`ITEMS`][i]));
          }
          this.A1_COD = this.reactiveForm.get('A1_COD')?.value || '';
          this.A1_LOJA = this.reactiveForm.get('A1_LOJA')?.value || '';
        })

        // for (let i = 0; i < pedidos.ITEMS.length; i++) {
        //   const control = <FormArray>this.reactiveForm.controls['ITEMS'];
        //   await control.push(this.fb.group(pedidos.ITEMS[i]));
        // }
      }
    });

  }

  createReactiveForm() {
    return this.fb.group({
      A1_COD: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(6)])),
      A1_LOJA: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])),
      A1_NOME: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(40)])),
      A1_NREDUZ: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(40)])),
      A1_CGC: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(14)])),
      A1_MSBLQL: new FormControl('', Validators.required),
      ITEMS: new FormArray([])
    });


  }
  createReactiveFormItem() {
    return this.fb.group({
      ZZK_SEQ: new FormControl(''),
      ZZK_NOME: new FormControl(''),
      ZZK_OBS: new FormControl(''),
      ZZK_MSBLQL: new FormControl(''),
      DELETADO: new FormControl(''),
    });
  }


  setItemSave() {
    const itemsArray = this.reactiveForm.get('ITEMS') as FormArray;
    itemsArray.push(this.fb.group(this.addItemForm.value));
  }

  retItems() {
    const itemsArray = this.reactiveForm.get('ITEMS') as FormArray;
    return itemsArray.value.filter((item: any) => item.DELETADO !== 'S');
  }

  async saveForm() {
    this.buttonDisable = true;

    if (this.A1_COD) {
      await firstValueFrom(this.clienteEditService.put(JSON.stringify(this.reactiveForm.value), this.A1_COD, this.A1_LOJA));

    } else {
      await firstValueFrom(this.clienteEditService.post(JSON.stringify(this.reactiveForm.value)));
    }

    //this.poNotification.success({ message: `Cliente incluído com sucesso` });
    this.router.navigate(['/client-list']);


  }


  setItemRemover(itemSelect: any) {
    let array = <FormArray>this.reactiveForm.get('ITEMS');
    let posC6_ITEM: number = array.value.findIndex((x: any) => x.ZZK_SEQ === itemSelect.ZZK_SEQ);
    console.log(posC6_ITEM)
    console.log(array)
    array.controls[posC6_ITEM].get('DELETADO')?.setValue('S');


  }

  /**
   * Verifica se a string possui letras
   */
  isLetter(str: any) {
    return str.match("^[a-zA-Z\(\)]+$");
  }

  isANumber(str: any) {
    return !/\D/.test(str);
  }



  /**
   * @author CHARLES REITZ - 28/05/2019
   * @description Retorna o próximo número, alfa numerico
   *
   *  */
  nextSequence(str: string) {
    let nValor = parseInt(str);
    let lenCaracter = str.length

    if (this.isANumber(str) && nValor < parseInt('9'.padStart(str.length, '9'))) {
      nValor++
      str = nValor.toString().padStart(str.length, '0')
    } else {
      // Position of char to change.
      var change = str.length - 1;
      // The value of that char.
      var change_char = str[change];
      // Number of zeros to append when flipping.
      var zeros = 0;
      // Iterate backwards while there's a z (flipping).
      while (change_char == 'Z') {
        // Increase the length of appended zeros
        zeros++;
        // Move the char to change back.
        change_char = str[--change];
      }
      if (change_char == undefined) {
        // Full flip - string increases in length.
        str = 'A' + Array(str.length + 1).join("0");
      } else {
        // Normal increment with partial flip and 9->a handling.
        str = str.substr(0, change)
          + (change_char == '9' ? 'A' : String.fromCharCode(str.charCodeAt(change) + 1))
          + Array(zeros + 1).join('0');
      }
      // Caso ultrapassar o limite
      if ((str.length) > lenCaracter) {
        str = ''.padStart(lenCaracter, 'Z')
      }
    }
    return str;
  };



}
