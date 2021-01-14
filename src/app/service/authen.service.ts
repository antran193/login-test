import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private usersubject: BehaviorSubject<any>;
  public user: Observable<any>;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.usersubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.user = this.usersubject.asObservable();
  }
  public get uservalue() {
    return this.usersubject.value;
  }
  login(data) {
    return this.http.post('users/authenticate', data).subscribe((res) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.usersubject.next(res);
      this.router.navigate(['/']);
      return true;
    }, error => {
      alert('fail');
    }
    )

  }
}
