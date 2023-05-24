/*
*    js  代码 加密
* // 加密
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

// 解密
var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
* */

/*
*
* java 代码解密
* // 解密
Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
SecretKeySpec secretKey = new SecretKeySpec("secret key 123".getBytes(), "AES");
cipher.init(Cipher.DECRYPT_MODE, secretKey);
byte[] ciphertextBytes = Base64.getDecoder().decode(ciphertext);
byte[] plaintextBytes = cipher.doFinal(ciphertextBytes);
String plaintext = new String(plaintextBytes);
* */
