import { Observable, Subscription } from "rxjs";
/**
 * Serviço responsável por CRUD.
 *
 * @author Fabio Guelfi<fabioguelfiunix@gmail.com>
 * @since 1.0.0
 */
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  public allResultsList = new BehaviorSubject<any>({});
  public cast = this.allResultsList.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Metodo que retorna tudo baseado na keywork
   * @param keyword string
   */
  public findAll(keyword: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append(`content-type`, `application/json`);
    // headers = headers.append('Authorization', 'auth-token');

    let params = new HttpParams();
    params = params.append(`search`, keyword);

    return this.http
      .get<any[]>(`${environment.api}cars`, { params, headers })
      .pipe(
        map(response => {
        this.allResultsList.next(response);
        return response;
      }))
      .pipe(catchError(err => Observable.throw(this.errorHandler(err))));
  }

  private errorHandler(error: any): string {
    console.log(error);
    return error;
  }

}
