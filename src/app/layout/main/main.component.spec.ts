import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainComponent} from './main.component';
import {HeaderComponent} from "../header/header.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterTestingModule} from "@angular/router/testing";


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
