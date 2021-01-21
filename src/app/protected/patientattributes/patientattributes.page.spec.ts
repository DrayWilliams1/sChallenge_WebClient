import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientattributesPage } from './patientattributes.page';

describe('PatientattributesPage', () => {
  let component: PatientattributesPage;
  let fixture: ComponentFixture<PatientattributesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientattributesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientattributesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
