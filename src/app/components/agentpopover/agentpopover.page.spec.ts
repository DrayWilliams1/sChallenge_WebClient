import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentpopoverPage } from './agentpopover.page';

describe('AgentpopoverPage', () => {
  let component: AgentpopoverPage;
  let fixture: ComponentFixture<AgentpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
