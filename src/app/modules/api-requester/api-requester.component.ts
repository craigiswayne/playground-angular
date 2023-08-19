import {Component, OnDestroy} from "@angular/core";
import {APIRequesterService} from "./api-requester.service";
import {BehaviorSubject, catchError, map, of, Subject, takeUntil, throwError} from "rxjs";

@Component({
  templateUrl: './api-requester.component.html',
  styleUrls: ['./api-requester.component.scss']
})
export class APIRequesterComponent implements OnDestroy {

  public response$ = new BehaviorSubject<any|null>(null);
  private destroyed$ = new Subject<void>();

  constructor(private readonly apiService: APIRequesterService) {
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public makeRequest(endpoint: string) {
    this.response$.next('');
    this.apiService.request(endpoint)
      .pipe(
        takeUntil(this.destroyed$),
        catchError((error, caught) => {
          this.response$.next(JSON.stringify(error, undefined, 2))
          return throwError(error);
        }),
        map(resp => {
          this.response$.next(JSON.stringify(resp, undefined, 2))
          return resp;
        })
      ).subscribe();
  }

}
