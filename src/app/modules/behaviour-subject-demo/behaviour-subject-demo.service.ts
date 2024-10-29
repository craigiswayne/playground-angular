import {BehaviorSubject} from 'rxjs';

export class BehaviourSubjectDemoService {
  public value$ = new BehaviorSubject<number>(0);

  public increment(): void {
    this.value$.next(this.value$.value+1);
  }
}
