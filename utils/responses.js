
//Standard error response
const errorResponse=(res, msg, error, code)=>{
    return res.status(code).json({
        ok: false,
        msg,
        error
    });
}

//Standard success response, can be personalized with a message
const customResponse=(res, msg, code = 200)=>{
    return res.status(code).json({
        ok: true,
        msg
    });
}

//Standard error response, can be personalized with a message
const customErrorResponse=(res, msg, code)=>{
    return res.status(code).json({
        ok: false,
        msg
    });
}


module.exports={
    errorResponse,
    customResponse,
    customErrorResponse
};