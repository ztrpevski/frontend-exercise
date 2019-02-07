import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {PagesModule} from "./pages/pages.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        PagesModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  //lets ignore them for now, will reuse the test code later
  xit(`should have as title 'frontend-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend-exercise');
  });

  //lets ignore them for now, will reuse the test code later
  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend-exercise!');
  });
});
