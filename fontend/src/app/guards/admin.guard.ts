import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const user = this.userService.currentUser;
    if (user.isAdmin) { // เปรียบเทียบเป็น boolean
        return true;
      } else {
        this.router.navigate(['/home']); // ถ้าไม่ใช่ admin ให้กลับไปที่ home
        return false;
      }
    }
  }
