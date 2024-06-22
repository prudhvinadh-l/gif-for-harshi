import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit{

  currentPage = 1;
  constructor(private router: Router, private service: CommonServiceService) { }

  ngOnInit(): void {
    this.checkCurrentPage();
  }

  showAlert1(): void {
    alert('Thanks madam ❤️.. ping me in whatsapp if you liked it😁');
  }

  showAlert2(): void {
    alert('No is not an Option👊.. You have to click on Yes Only😏.. Okkkkkkaaaaayyyy.. This \'No\' Option i kept for decoration Only😜');
  }
  
  checkCurrentPage(): void {
    const currentPath = this.router.url; 
    if (currentPath === '/book') {
      this.service.setUserName('Harshita ❤️🎉');
    } else {
      this.service.setUserName('user');
    }
  }
  
}
