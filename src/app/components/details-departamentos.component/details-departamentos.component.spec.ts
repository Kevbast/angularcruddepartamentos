import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepartamentosComponent } from './details-departamentos.component';

describe('DetailsDepartamentosComponent', () => {
  let component: DetailsDepartamentosComponent;
  let fixture: ComponentFixture<DetailsDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
