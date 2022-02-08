const productOption = require('../models/productOption')
async function addProductOption(req,res) {
    const { idProduct, idSize } = req.body
    //check missing id
    if(!idProduct || !idSize) {
        return res.json({
                    errorMsg: "Missing idProduct or idSize product",
                    data: null
        })
    }
    const pdOp = await productOption.addProductOption(
        idProduct,
        idSize
    )
    if(pdOp[0]){
        return res.json({
            errorMsg: pdOp[0].message,
            data: null
        })
    }
    return res.json({
        errorMsg: null,
        data: pdOp[1]
    })
}
module.exports = {
    addProductOption
}