import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { UserData } from '../../_models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  total!: number;
  users!: UserData[];
  totalPages!: number;
  selectedPage:number=1
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers(1, 5).subscribe((data) => {
      console.log(data)
      this.total = data["total_users"]
      this.totalPages = data["total_pages"]
      this.users = data["users"]
      console.log(this.totalPages)
    })
  }


  getPages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

    selectPage(page:number){
    }

}
