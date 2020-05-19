const getCookie = ( name ) =>{
    console.log( 'in getCookie:', name );
    const cookieString = RegExp(''+name+'[^;]+').exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
} // end getCookie

const setCookie = ( name, value ) =>{
    console.log( 'in setCookie:', name, value );
    document.cookie=`${name}=${value}`;
} // end setCookie

export {
    getCookie, setCookie
}