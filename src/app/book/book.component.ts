import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  currentPage = 1;

  toggleClass(e:any, toggleClassName: string) {
    if (e.className.includes(toggleClassName)) {
      e.className = e.className.replace(" " + toggleClassName, "");
    } else {
      e.className += " " + toggleClassName;
    }
  }
  
  movePage(e: any, page: number): void {
    if (page == this.currentPage) {
      this.currentPage += 2;
      this.toggleClass(e, "left-side");
      this.toggleClass(e.nextElementSibling, "left-side");
    } else if ((page = this.currentPage - 1)) {
      this.currentPage -= 2;
      this.toggleClass(e, "left-side");
      this.toggleClass(e.previousElementSibling, "left-side");
    }
  }
}
