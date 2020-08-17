function whatsMyContext(){
    return this;
}
        console.log("1-----", whatsMyContext() === globalThis);

const getMyThis = whatsMyContext;


        console.log("2-----", whatsMyContext() === globalThis);

const ninja1 = {
    getMyThis : whatsMyContext
}

        console.log("3-----", ninja1.getMyThis() === ninja1);

        
const ninja2 = {
    getMyThis : whatsMyContext
}

        console.log("4-----", ninja2.getMyThis() === ninja2);

