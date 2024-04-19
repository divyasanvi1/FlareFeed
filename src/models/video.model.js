import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose,{Schema} from "mongoose";

const videoSchema=new Schema({
    title :{
        type:String,
        required :true,
        trim :true,
    },
    thumbnail :{
        type:String, //cloudinary url
        required :true,
    },
    videoFile:{
        type:String, //cloudinary url
        required :true, 
    },
    description :{
        type:String,
        required :true,
        trim :true,
    },
    duration:{
        type:String, //cloudinary url
        required :true, 
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true 
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref :"User"
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("video",videoSchema)