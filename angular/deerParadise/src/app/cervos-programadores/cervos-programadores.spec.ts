import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervosProgramadores } from './cervos-programadores';

describe('CervosProgramadores', () => {
  let component: CervosProgramadores;
  let fixture: ComponentFixture<CervosProgramadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CervosProgramadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CervosProgramadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
