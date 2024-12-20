import { DraftInterface } from "pck-schema";
import { BehaviorSubject } from "rxjs";

const draftBufferSubject = new BehaviorSubject<DraftInterface[]>([]);

export const getDraftCache = () => draftBufferSubject.asObservable();

export const updateDraftCache = (newDraft: DraftInterface) => {
  const currentCache = draftBufferSubject.getValue();
  const updatedCache = [...currentCache, newDraft].filter(
    (file, index, self) => index === self.findIndex((f) => f.id === file.id),
  );
  draftBufferSubject.next(updatedCache);
};
