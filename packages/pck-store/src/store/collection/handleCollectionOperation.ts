import { pinoLogger } from "pck-log";
import { RxCollection } from "rxdb";
import { Observable, switchMap, catchError, of } from "rxjs";

export const handleCollectionOperation = (
  collectionSubject: Observable<RxCollection | null>,
  operation: (collection: RxCollection) => Observable<any>,
): Observable<any> => {
  return collectionSubject.pipe(
    switchMap((collection) => {
      if (collection) {
        return operation(collection).pipe(
          catchError((error) => {
            pinoLogger.error("Operation failed:", error);
            return of(null); // 捕捉错误并返回 null
          }),
        );
      } else {
        return of(null);
      }
    }),
  );
};
