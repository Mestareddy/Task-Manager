const asyncWrapper = (fn)=>{
    return async(req,res,next,done)=>{
        try {
            await fn(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = asyncWrapper