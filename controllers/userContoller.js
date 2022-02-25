
exports.signIn=async function (req,res) {
    try {
        res.status(200).json({
            status:"success"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.login=async function (req,res) {
    try {
        res.status(200).json({
            status:"success"
        })
    } catch (error) {
        console.log(error)
    }
}