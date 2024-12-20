import { DraftBuilder } from "./index.builder";

// 使用示例
export const DraftFactory = () => {

  const draft = (new DraftBuilder())
    .setTitle("Test Title")
    .setContent({ key: "value" })
    .setAuthor("Author Name")
    .setTags(["tag1", "tag2"])
    .addComment("User1", "This is a comment")
    .build();
  return draft
} 
