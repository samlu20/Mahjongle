import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandBuilderComponent } from './hand-builder/hand-builder.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { TileDirective } from './shared/tile.directive';
import { TestDirective } from './shared/test.directive';
import { TileHandService } from './services/tile-hand.service';
import { TilePickerDialogComponent } from './tile-picker-dialog/tile-picker-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TileDirective,
    TestDirective,
    HandBuilderComponent,
    MenuComponent,
    TilePickerDialogComponent,
    HelpDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [ 
    MatDrawerContainer,
    TileHandService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
