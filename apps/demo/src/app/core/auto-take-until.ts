import { getObservableLifecycle } from 'ngx-observable-lifecycle'
import { Observable, takeUntil } from 'rxjs'

export function autoTakeUntil<T>(component: unknown): (source: Observable<T>) => Observable<T> {
  const { ngOnDestroy } = getObservableLifecycle(component)
  return (source: Observable<T>): Observable<T> => source.pipe(takeUntil(ngOnDestroy))
}
