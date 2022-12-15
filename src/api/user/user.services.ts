import User, {UserDocument}  from './user.model';
import { DocumentDefinition, FilterQuery } from "mongoose";

export function getAllUsers(){
  return User.find();
}

export function getUserById(id:string){
  const user=User.findById(id);
  return user;
}

export function getUser(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);
  return user;
}

export function getUser(filter:FilterQuery<UserDocument>){
  const user = User.findOne(filter)
  return user;
}

export function createUser(user:DocumentDefinition<Omit<UserDocument,'createdAt'| 'updateAt'>>){
  return User.create(user);
}

export function updateUser(id:string,user:DocumentDefinition<Omit<UserDocument,'createdAt'| 'updateAt'>>){
  const UpdateUser=User.findByIdAndUpdate(id,user,{new:true});
  return UpdateUser;
}

export function deleteUser(id:string){
  const DeleteUser=User.findByIdAndDelete(id);
  return DeleteUser;
}
