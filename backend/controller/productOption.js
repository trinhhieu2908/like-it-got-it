const productOption = require('../models/productOption')
async function addProductOption(req,res) {
    const { id, idSize } = req.body
    //check missing id
    if(!id || !idSize) {
        return res.json({
                    errorMsg: "Missing id or idSize product",
                    data: null
        })
    }
    const pdOp = await productOption.addProductOption({
        id,
        idSize
    })
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