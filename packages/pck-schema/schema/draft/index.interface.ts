/*
* 变量介绍
* @id: 用于唯一标识每个文档，确保每个文档都有一个独特的标识符。
* @title: 文档的标题，帮助用户快速了解文档的内容或主题。
* @content: 文档的主要内容，可以包含文本、图片、数据等，具体类型可以根据需求定义。
* @isopen: 一个布尔值，表示文档是否当前处于打开状态。true 表示文档正在被查看或编辑，false 表示文档关闭。
* @lastOpen: 记录上次打开文档的时间，帮助追踪文档的使用情况。
* @createTime: 文档创建的时间，记录文档的生成时间。
* @updateTime: 文档最后一次更新的时间，记录文档内容的最后修改时间。
* @author: 记录文档的创建者或编辑者，方便追踪文档的来源和责任人。
* @tags: 用于给文档添加标签，帮助分类和快速检索相关文档。
* @version: 记录文档的版本号，方便管理文档的修订历史。
* @isArchived: 一个布尔值，表示文档是否已归档。归档的文档通常不再进行编辑，但仍然可以查看。
* @comments: 一个数组，包含文档的评论信息。每条评论记录评论者、评论内容和时间戳，方便用户交流和反馈。
*/
export interface DraftInterface {
  id: string;
  title: string;
  content: {};
  isopen: boolean;
  lastOpen: string;
  createTime: string;
  updateTime: string;
  author: string;
  tags: string[];
  version: number;
  isArchived: boolean;
  comments: { user: string; comment: string; timestamp: string }[];
}

