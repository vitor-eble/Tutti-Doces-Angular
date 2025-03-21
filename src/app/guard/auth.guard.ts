import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs";

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.getUsuarioEstaAutenticado().pipe(
      map(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
          return false
        }
        return true
      })
    )

  }
}
