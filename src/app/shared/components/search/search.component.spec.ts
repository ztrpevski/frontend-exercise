import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {FormsModule} from "@angular/forms";
import {NgScrollbarModule} from "ngx-scrollbar";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule, HttpClientTestingModule, NgScrollbarModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('when there is no parameter selected', () => {



  });

});
