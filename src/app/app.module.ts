import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    LivroListaComponent,
    AppComponent,
    // ... outros componentes
  ],
  imports: [BrowserModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule { }