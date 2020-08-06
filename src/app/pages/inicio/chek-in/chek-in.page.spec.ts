import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChekInPage } from './chek-in.page';

describe('ChekInPage', () => {
  let component: ChekInPage;
  let fixture: ComponentFixture<ChekInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChekInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
