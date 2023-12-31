import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoanRequest } from '../model/loan-request';
import { Observable } from 'rxjs';

@Injectable()
export class LoanRequestService {
  private usersUrl! : string;
  
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/v1.0/loanRequest';

   }

   public findAll(): Observable<LoanRequest[]> {
    return this.http.get<LoanRequest[]>(this.usersUrl + "/");
  }

  public approveLoan(loanId:any, user:LoanRequest) {
    return this.http.post<LoanRequest>(this.usersUrl + "/approve/" + loanId, user);
  }

  public save(user: LoanRequest) {
    return this.http.post<LoanRequest>(this.usersUrl + "/", user);
}
}
