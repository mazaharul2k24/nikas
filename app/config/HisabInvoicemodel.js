import mongoose from "mongoose";

const hisabinSchbima=mongoose.Schema({
    buyerID:{
        type:String,
        require:true
    },
    buyerName:{
        type:String,
        require:true
    },
    buyerPhone:{
        type:String,
        require:true
    },
    insertDate:{
        type:String,
        require:true
    },
    buyerAddress:{
        type:String,
        require:true
    },
    buyerStatus:{
        type:String,
        require:true
    },
    buyerProduct:{
        type:Array,
        require:true
    }

})

const hiabModel=mongoose.models.hisabTable || mongoose.model("hisabTable",hisabinSchbima)

export {hiabModel}