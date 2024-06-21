import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpusimagesComponent } from './corpusimages.component';

describe('CorpusimagesComponent', () => {
  let component: CorpusimagesComponent;
  let fixture: ComponentFixture<CorpusimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpusimagesComponent]
    });
    fixture = TestBed.createComponent(CorpusimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
