import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile : {
        type : String, //cloudnarry
        required : true
    },
    thumbmail : {
        type : String, //cloudnarry
        required : true
    },
    title : {
        type : String, 
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    duration: {
        type : Number, //cloudnary se duration milega
        required : true
    },
    views :{
        type: Number,
        default: 0
    },
    isPublic : {
        type : Boolean,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema);
