import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientdatesPage } from './patientdates.page';

describe('PatientdatesPage', () => {
  let component: PatientdatesPage;
  let fixture: ComponentFixture<PatientdatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientdatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
