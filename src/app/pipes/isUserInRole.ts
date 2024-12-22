import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Pipe({
  name: 'isUserInRole',
  standalone: true,
})
export class IsUserInRole implements PipeTransform {
  constructor(private authService: AuthService) {}
  transform(role: string | string[] | undefined): boolean {
    if (!role) return true;
    if (Array.isArray(role)) {
      if (role.length === 0) return true;
      let res = false;
      role.forEach(el => {
        if (this.authService.isUserInRole(el)) {
          res = true;
        }
      })
      return res;
    } else {
      return this.authService.isUserInRole(role);
    }
  }
}
