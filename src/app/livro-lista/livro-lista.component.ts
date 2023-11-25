import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  excluir(codigoLivro: number): void {
    this.servLivros.excluir(codigoLivro);
    this.carregarDados();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }

  private carregarDados(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }
}
