const product = require('../models/product')
async function addProduct(req,res) {
    const body = req.body
    const priceAfterSale = body.price * body.saleOff/100
    const pd = await product.addProduct({
        ...body,
        priceAfterSale
    }
    )
    if(pd[0]){
        return res.json({
            errorMsg: pd[0].message,
            data: null
        })
    }
    return res.json({
        errorMsg: null,
        data: pd[1]
    })
}

async function listAllProducts(req,res) {
    const pd = await product.listAllProducts()
    if(pd[0]){
        return res.json({
            errorMsg: pd[0].message,
            data: null
        })
    }
    return res.json({
        errorMsg: null,
        data: pd[1]
    })
}
async function updateProduct(req,res) {
    const body = req.body
    const id = req.params.id
    //check missing id
    if(!id) {
        return res.json({
                    errorMsg: "Missing id product",
                    data: null
        })
    }
    const updateFields = ["idCategory", "idBrand", "name", "price", "priceAfterSale", "saleOff", "desc", "hot"]
    const inputUpdateFields = Object.keys(body)
    const isInFields = inputUpdateFields.every(field => updateFields.includes(field))
    if(isInFields && inputUpdateFields.length > 0) {
        // allow update 
        const pd = await product.updateProduct(body, id)
        if(pd[0]){
            return res.json({
                errorMsg: pd[0].message,
                data: null
            })
        }
        return res.json({
            errorMsg: null,
            data: pd[1]
        })
    }
    // not allow update
    return res.json({
        errorMsg: "Not allow update some fields",
        data: null
    })
}
module.exports = {
    addProduct,
    listAllProducts,
    updateProduct
}