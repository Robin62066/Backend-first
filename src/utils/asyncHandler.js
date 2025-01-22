const asyncHandler = (reqHandlar) =>{
    (req,res,next) =>{
        Promise.resolve(reqHandlar(req, res, next)).
        catch((err)=> next(err))
    }
}

export {asyncHandler}

//this function is used for database connectity all time 
// const asyncHandler = () =>{}
// const asyncHandler = (fun) =>()=>{}
// const asyncHandler = (fun) =>{()=>{}}
// const asyncHandler = (fun) =>async()=>{}

    //this is try catch code async await code
// const asyncHandler = (fn) => async(req, res, next)=>{
//     try {
//     await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message : error.message
//         })
//     }
// }
