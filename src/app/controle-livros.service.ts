import { Livro } from "./livro";

export class ControleLivrosService {
    livros: any;
    // ... código anterior ...
   
    obterLivros(): Livro[] {
      return this.livros;
    }
   
    incluir(livro: Livro): void {
      const novoId = Math.max(...this.livros.map((l: { id: any; }) => l.id)) + 1;
      const novoLivro = { ...livro, id: novoId };
      this.livros.push(novoLivro);
    }
   
    excluir(id: number): void {
      const index = this.livros.findIndex((l: { id: number; }) => l.id === id);
      if (index !== -1) {
        this.livros.splice(index, 1);
      }
    }
   }