import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChekOutPage } from './chek-out.page';

describe('ChekOutPage', () => {
  let component: ChekOutPage;
  let fixture: ComponentFixture<ChekOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChekOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
