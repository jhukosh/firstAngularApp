import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';
import { DisplayListDirective } from './display-list.directive';
import { MenuComponent } from './menu/menu.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { YodaComponent } from './yoda/yoda.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HoverStyleDirective,
    DisplayListDirective,
    MenuComponent,
    CocktailListComponentComponent,
    SearchMovieComponent,
    DeveloperComponent,
    SkillComponent,
    YodaComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
