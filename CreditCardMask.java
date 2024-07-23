/*
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */

public class CreditCardMask {
    public static String maskify(String str) {
    	if (!(str instanceof String))
    		throw new UnsupportedOperationException("Unimplemented");

        char[] arrayOfLetters = str.toCharArray();
        String result = "";

        for(int i = 0; i < arrayOfLetters.length; i++){
            if(i >= arrayOfLetters.length - 4)
            	result = result + arrayOfLetters[i];
            else
            	result = result + "#";
        }
        return result;
    }
}
