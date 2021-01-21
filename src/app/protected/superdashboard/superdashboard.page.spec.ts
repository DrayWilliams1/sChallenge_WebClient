import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperdashboardPage } from './superdashboard.page';

describe('SuperdashboardPage', () => {
  let component: SuperdashboardPage;
  let fixture: ComponentFixture<SuperdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
