import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule],
})

export class MaterialModule { }