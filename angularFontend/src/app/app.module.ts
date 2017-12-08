import { AccountComponent } from './account/account.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceProvider } from './ServiceProvider';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: AccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
