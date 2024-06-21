import { ChangeDetectorRef, Component, Input, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gif-for-harshi';
  user: string | undefined;
  constructor(public router: Router, private service: CommonServiceService, private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.service.getUserName().subscribe((name) => {
      this.user = name ? `${name}` : 'user';
      this.cdr.detectChanges();
    });
  }

  navigateToLogin() {
    debugger;
    this.router.navigate(['/login']);
  }
}
