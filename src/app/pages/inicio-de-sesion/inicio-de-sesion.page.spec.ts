import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioDeSesionPage } from './inicio-de-sesion.page';

describe('InicioDeSesionPage', () => {
  let component: InicioDeSesionPage;
  let fixture: ComponentFixture<InicioDeSesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDeSesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioDeSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
