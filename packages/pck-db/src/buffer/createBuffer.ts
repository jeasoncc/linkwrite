import { BehaviorSubject } from "rxjs";

interface File {
    id: string;
    // 其他属性
}

const fileCacheSubject = new BehaviorSubject<File[]>([]);

export const getFileCache = () => fileCacheSubject.asObservable();

export const updateFileCache = (newFile: File) => {
    const currentCache = fileCacheSubject.getValue();
    const updatedCache = [...currentCache, newFile].filter(
        (file, index, self) =>
            index === self.findIndex((f) => f.id === file.id),
    );
    fileCacheSubject.next(updatedCache);
};
