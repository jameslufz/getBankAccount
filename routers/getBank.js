const   express =   require('express')
const   router  =   express.Router()
const   axios   =   require('axios')

router.post("/",async (req,res) => {
    
    const   { bankAccNo,bankCode }  =   req.body

    if(!bankAccNo || bankCode)  {
        try {
            const   { data }  =   await axios.post(`https://99betmem.biz/api/bank/verify`,JSON.stringify({
                bankAccNo   :   bankAccNo,
                bankCode    :   bankCode,
            }),
            {
                headers :   {
                    'Content-type'  :   'application/json'
                }
            })
            const   customResponse  =   {
                message :   'Success',
                status  :   'ok',
                data    :   data.data || data,
            }
            return res.status(200).json(customResponse)
        }
        catch(errors)   {
            console.log(errors)
            return res.status(500).json({message:'Something wrong.',status:'errors',code:500})
        }
    }else{
        return res.status(422).json({message:'Not allow method.',status:'errors',code:422})
    }

})

module.exports  =   router