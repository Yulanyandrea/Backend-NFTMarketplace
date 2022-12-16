import { Schema, model, Document } from 'mongoose';
import { userProfileData } from './user.types';
import bcrypt from 'bcrypt';


const Payment = new Schema({
  customerId: String,
  cards: [
    {
      paymentMethodId: String,
      brand: String,
      country: String,
      expMonth: Number,
      expYear: Number,
      funding: String,
      last4: String,
    },
  ],
});
export interface UserDocument extends Document{
  firstName:string;
  lastName:string;
  password:string;
  phone:string;
  gendre:string;
  location:string;
  address:string;
  currency:string;
  role:string;
  email:string;
  socialmedia:string;
  followers:number;
  profilepicture:string;
  coverpicture:string;
  likes:string;
  nftbought:string;
  nftcreated:string;

  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updateAt:Date;

  userProfile:userProfileData;
  comparePassword:(password:string)=>Promise<boolean>;

}

const UserSchema=new Schema({
  firstname:{
    type:String,
    require:[true, 'Please provide a name'],
  },
  lastname:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true,
    min:6,
    max:8
  },
  phone:{
    type:String,
    unique:true,
  },
  gendre:{
    type:String,
    require:true
  },
  location:{
    type:String,
    require:true,
    uppercase: true,
  },
  address:{
    type:String
  },
  currency:{
    type:String,
    default:'dolar',
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default:'USER',
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
  },
  socialmedia:{
    type:String,
    enum:['INSTAGRAM','FACEBOOK','TWITTER']
  },
  followers:{
    type:Number
  },
  profilepicture:{
    type:String,
  },
  coverpicture:{
    type:String
  },
  likes:{
    type:String
  },
  nftbought:{
    type:String
  },
  nftcreated:{
    type:String
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false
  })

  UserSchema.virtual('userProfile').get(function fulldataUser(){
    const {firstname,lastname, location, email, role, profilepicture, coverpicture}=this
    return { firstname,
      lastname,
      location,
      email,
      role,
      profilepicture,
      coverpicture }
  })

  //implementing bcrypt
  UserSchema.pre('save',async function save(next: Function){
    const user = this as UserDocument;
    try {
      if(!user.isModified('password')){
        return next()
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;

    } catch (error:any) {
      next(error);
    }
  })

  UserSchema.pre('save',async function save(next: Function){
    const user = this as UserDocument;
    try {
      if(!user.isModified('password')){
        return next()
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;

    } catch (error:any) {
      next(error);
    }
  })



  //method
  UserSchema.methods.comparePassword = async function comparePassword(this: UserDocument,candidatePassword:string, next:Function) {
    const user = this ;
   try {
    const isMatch = await bcrypt.compare(candidatePassword,user.password);
    return isMatch;
   } catch (error:any) {
    next(error)
    return false;

   }

  }

  const User=model<UserDocument>('User',UserSchema);
  export default User;

