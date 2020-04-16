import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountconfigPage } from './accountconfig.page';

describe('AccountconfigPage', () => {
  let component: AccountconfigPage;
  let fixture: ComponentFixture<AccountconfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountconfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
