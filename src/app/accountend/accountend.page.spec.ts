import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountendPage } from './accountend.page';

describe('AccountendPage', () => {
  let component: AccountendPage;
  let fixture: ComponentFixture<AccountendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
