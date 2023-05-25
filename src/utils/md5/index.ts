// md5HashUtil.ts
import md5 from 'js-md5';

/**
 * 生成数据和密钥的MD5哈希值
 * @param data 需要进行哈希处理的数据
 * @param secretKey 约定的密钥
 * @returns MD5哈希值
 */
export function generateHash(data: string, secretKey?: string): string {
  if (!secretKey) {
    return md5(data);
  } else {
    const combinedData = data + secretKey;
    const md5Hash = md5(combinedData);
    return md5Hash;
  }
}
