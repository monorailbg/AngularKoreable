import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

const modules = [MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule]

@NgModule({
  imports: modules, 
  exports: modules, 
})

export class DesignComponent {

}
