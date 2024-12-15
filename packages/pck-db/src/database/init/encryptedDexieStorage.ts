import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
// 生成一个安全的密钥
// wrap the normal storage with the encryption plugin
export const encryptedDexieStorage = wrappedKeyEncryptionCryptoJsStorage({
  storage: getRxStorageDexie(),
});
