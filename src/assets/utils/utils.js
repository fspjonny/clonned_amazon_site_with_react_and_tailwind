import Cookies from "js-cookie";

export function logOff() {
    Cookies.remove('username')
    window.location.reload()
}
