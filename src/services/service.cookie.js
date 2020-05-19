const getCookie = ( name ) =>{
    console.log( 'in getCookie:', name );
} // end getCookie

const setCookie = ( name, value ) =>{
    console.log( 'in setCookie:', name, value );
    document.cookie=`${name}=${value}`;
} // end setCookie

export {
    getCookie, setCookie
}