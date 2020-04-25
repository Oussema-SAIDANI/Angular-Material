import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
const materialsCompentn = [ MatButtonModule, MatIconModule, MatBadgeModule,
  MatListModule, MatToolbarModule,
MatCardModule];
@NgModule({

  imports: [
    materialsCompentn
  ],
  exports: [
    materialsCompentn
  ]
})
export class MaterialsModule { }
