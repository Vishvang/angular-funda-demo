import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MovieCharacterService } from './movie-character.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  { path: '', component: TabsComponent },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/'}
  // { path: '**', component: TabsComponent}
  // ** means wild cart - catch any routes, order is impo here. It must be last after handling our all specific routes in this array.
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieCharacterService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
