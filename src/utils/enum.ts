
export enum backEndPoints {
    SUIT = '/suit/',
    BESTSELL = '/bestsell/',
    PANT = '/pants/',
    SHORT ='/short/',
    COUNSEL = '/counsel/',
    CATEGORY = '/category/',
    HIGHTLIGHT = '/highlight/',
    CONTACTUS = '/contactus/',
    CLOTHES = '/clothes/',
    SINGLE_CLOTHES = '/single_clothes/',
    FILTER_CLOTHERS_PANT = '/filter_clothes_pant/',
    FILTER_CLOTHERS_SHORT = '/filter_clothes_short/',
    FILTER_CLOTHERS_COUNSEL = '/filter_clothes_counsel/',
    FILTER_CLOTHERS_SUIT = '/filter_clothes_suit/',
    UPDATE_RATING = '/update-rating/',
    FILTER_CLOTHERS_WEDDING = '/filter_clothes_wedding/',
    FOLLOW_US =  '/follow_us/',
    LOGIN = '/user/login/',
    SIGNUP = '/user/register/',
    BLOG = '/blog/',
    PAYMENT = '/payment/',
    MAKE_ORDER = '/create',
    USER_PAYMENT = '/payments/',
    SINGLE_PAYMENT = '/payments/',
    VERIFY_PAYMENT = '/payment/verify/'

}


export enum empireToken {
    USERTOKEN = 'token',
    USER_ID = 'id',
    EMAIL = 'email',
    USERNAME = 'username',
    FULLNAME = 'fullname',
    ACCOUNTTYPEe = 'user_type',
    TELEPHONE = 'phone',
    ADDRESS = 'address',
}

export const logout = () =>{
    localStorage.removeItem(empireToken.USERTOKEN)
    localStorage.removeItem(empireToken.FULLNAME)
    localStorage.removeItem(empireToken.EMAIL)
    localStorage.removeItem(empireToken.USERNAME)
    localStorage.removeItem(empireToken.USER_ID)
    localStorage.removeItem(empireToken.TELEPHONE)
    localStorage.removeItem(empireToken.ADDRESS)
  
    if(localStorage.getItem(empireToken.USERTOKEN) === null){
      window.location.href = '/'
    }
  } 