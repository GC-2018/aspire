import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicerecordingsComponent } from './voicerecordings.component';

describe('VoicerecordingsComponent', () => {
  let component: VoicerecordingsComponent;
  let fixture: ComponentFixture<VoicerecordingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicerecordingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicerecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
