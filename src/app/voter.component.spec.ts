import { TestBed, async } from '@angular/core/testing';
import {VoterComponent} from './voter.component';


describe('VoterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ],
    }).compileComponents();
  }));

  it(`should have null hoverOver`, async(() => {
    const fixture = TestBed.createComponent(VoterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hoverOver).toEqual(null);
  }));

});
