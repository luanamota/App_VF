import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentosPage } from './documentos';

@NgModule({
  declarations: [
    DocumentosPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentosPage),
  ],
})
export class DocumentosPageModule {}
