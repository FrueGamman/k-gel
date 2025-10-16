import { empireToken } from "./enum";

export class ValidateUser{
    static  clearToken = async () => {
   
        localStorage.removeItem(empireToken.USERTOKEN);
        localStorage.removeItem(empireToken.USER_ID);
        localStorage.removeItem(empireToken.JWT_EXPIRATION);
        localStorage.removeItem(empireToken.USERNAME);
        localStorage.removeItem(empireToken.FULLNAME);
        localStorage.removeItem(empireToken.EMAIL);
        localStorage.removeItem(empireToken.ACCOUNTTYPEe);
        Cookies.remove(empireToken.USERTOKEN);
      };
  }