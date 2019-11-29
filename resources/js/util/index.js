export const serialize = function(obj) {
    const str = [];
    Object.keys(obj).forEach((key)=>{
        if (obj.hasOwnProperty(key))
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    });
    return str.join("&");
};


