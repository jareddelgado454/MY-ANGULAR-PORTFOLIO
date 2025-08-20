import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly _dialog = inject(MatDialog);

  openModal<CT>(componentRef: ComponentType<CT>, message: string): void{
    const config = {message};

    this._dialog.open(
      componentRef,
      {
        data: config,
        width : "600px"
      }      
    )
  }

  closeModal(): void{
    this._dialog.closeAll();
  }
  
}
