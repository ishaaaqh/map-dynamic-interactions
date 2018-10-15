import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInteractionComponent } from './map-interaction.component';

describe('MapInteractionComponent', () => {
  let component: MapInteractionComponent;
  let fixture: ComponentFixture<MapInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
