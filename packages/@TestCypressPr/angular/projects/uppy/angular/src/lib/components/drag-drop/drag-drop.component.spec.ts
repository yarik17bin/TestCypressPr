import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropComponent } from './drag-drop.component';

describe('DragDropComponent', () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.generateComponent(DragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate', () => {
    expect(component).toBeTruthy();
  });
});
