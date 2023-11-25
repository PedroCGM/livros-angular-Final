import { TestBed } from '@angular/core/testing';

import { ControleLivrosSkipTestsService } from './controle-livros---skip-tests.service';

describe('ControleLivrosSkipTestsService', () => {
  let service: ControleLivrosSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLivrosSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
