/*
 * @id: 用户的唯一标识符。
 * @username: 用户名。
 * @email: 用户的电子邮件地址。
 * @password: 用户的密码（通常应加密存储）。
 * @createdAt: 用户账户创建时间。
 * @updatedAt: 用户账户最后更新时间。
 * @role: 用户的角色（例如管理员、编辑者、查看者等）。
 * @documents: 用户管理的文档列表。
 * @isActive: 用户账户是否处于激活状态。
 * @lastLogin: 用户最后一次登录时间。
 */

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  documents: string[]; // 文档ID列表
  isActive: boolean;
  lastLogin: string;
}
