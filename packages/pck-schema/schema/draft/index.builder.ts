import { makeRandomFn } from "pck-utils";
import { DraftInterface } from "./index.interface";

export class DraftBuilder {
  private draft: DraftInterface;

  constructor() {
    const currentTime = new Date().toISOString();
    this.draft = {
      id: this.generateId(),
      title: "",
      content: {},
      isopen: false,
      lastOpen: "",
      createTime: currentTime,
      updateTime: currentTime,
      author: "",
      tags: [],
      version: 1,
      isArchived: false,
      comments: [],
    };
  }

  private generateId(): string {
    return makeRandomFn();
  }

  setTitle(title: string): DraftBuilder {
    this.draft.title = title;
    return this;
  }

  setContent(content: Record<string, any>): DraftBuilder {
    this.draft.content = content;
    return this;
  }

  setAuthor(author: string): DraftBuilder {
    this.draft.author = author;
    return this;
  }

  setTags(tags: string[]): DraftBuilder {
    this.draft.tags = tags;
    return this;
  }

  setVersion(version: number): DraftBuilder {
    this.draft.version = version;
    return this;
  }

  setIsArchived(isArchived: boolean): DraftBuilder {
    this.draft.isArchived = isArchived;
    return this;
  }

  addComment(user: string, comment: string): DraftBuilder {
    this.draft.comments.push({
      user,
      comment,
      timestamp: new Date().toISOString(),
    });
    return this;
  }

  build(): DraftInterface {
    return this.draft;
  }
}
