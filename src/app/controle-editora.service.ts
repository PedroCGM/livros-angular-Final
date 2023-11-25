// controle-editora.service.ts
import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  constructor() { }

  // Opção 1: usando o operador ! (não nulo)
getNomeEditora(codEditora: number): string {
  const editora = this.editoras.find(e => e.codEditora === codEditora);
  return editora!.nome; // Note o uso do operador !
}

  getEditoras(): Editora[] {
    return this.editoras;
  }
}