import { BehaviorSubject } from "rxjs";
import { RxCollection } from "rxdb";
import { DraftInterface } from "pck-schema";

export const collectionSubject =
  new BehaviorSubject<RxCollection<DraftInterface> | null>(null);
