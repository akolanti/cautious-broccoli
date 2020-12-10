import { NgModule } from '@angular/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
  ],
  providers: [ MatDatepickerModule ],
})
export class MaterialModule { }
