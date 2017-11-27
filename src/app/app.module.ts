import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ButtonOverviewExampleComponent } from './button-overview-example/button-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    ButtonOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
