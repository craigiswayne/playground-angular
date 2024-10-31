import {BehaviorSubject} from 'rxjs';

export class BehaviourSubjectDemoService {
  public obs$ = new BehaviorSubject<number>(0);

  public increment(): void {
    this.obs$.next(this.obs$.value+1);
  }
}
