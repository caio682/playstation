import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isSearchFocused = false;
  constructor(private renderer: Renderer2) { }

  onFocus(): void {
    this.isSearchFocused = true;
    this.renderer.addClass(document.body, 'search-focused');
  }

  onBlur(): void {
    this.isSearchFocused = false;
    this.renderer.removeClass(document.body, 'search-focused');
  }

}
