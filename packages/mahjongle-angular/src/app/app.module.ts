import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileDirective } from './shared/tile.directive';
import { TestDirective } from './shared/test.directive';
import { HandBuilderComponent } from './hand-builder/hand-builder.component';
import { MenuComponent } from './menu/menu.component';
import { TilePickerDialogComponent } from './tile-picker-dialog/tile-picker-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TileDirective,
    TestDirective,
    HandBuilderComponent,
    MenuComponent,
    TilePickerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [ MatDrawerContainer ],
  bootstrap: [AppComponent]
})
export class AppModule { }
