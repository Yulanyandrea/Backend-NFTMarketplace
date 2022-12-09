import User from './user.model';

export function getAllUsers(){
  return User.find();
}

export function getUserById(id){
  const user=User.findById(id);
  return user;
}

export function createUser(user){
  return User.create(user);
}

export function updateUser(id,user){
  const UpdateUser=User.findByIdAndUpdate(id,user,{new:true});
  return UpdateUser;
}

export function deleteUser(id){
  const DeleteUser=User.findByIdAndDelete(id);
  return DeleteUser;
}
