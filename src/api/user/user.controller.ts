import {Request, Response, NextFunction} from 'express';
import {getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUser } from './user.services';

export async function handleAllGetUsers(req:Request,res:Response,next:NextFunction){
  try {
    const users=await getAllUsers();
    return res.status(200).json(users)

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)

  }
}

export async function handleCreateUser(req:Request,res:Response,next:NextFunction){
  const data=req.body;
  console.log(data);
  try {
    const user= await createUser(data);
    return res.status(201).json(user);

  } catch (error:any) {
    return res.status(500).json(error.message)
  }
}

export async function handleGetUser(req:Request,res:Response,next:NextFunction){
  const {id}=req.params;
  try {
    const getUser=await getUserById(id);
    if(!getUser){
      return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json(getUser.userProfile)

  } catch (error) {
   return res.status(500).json(error);

  }
}

export async function handleUpdateUser(req:Request,res:Response,next:NextFunction) {
  const data =req.body;
  const {id}=req.params;
  try {
    const Update= await updateUser(id,data);
    return res.status(201).json(Update);
  } catch (error) {
    return res.status(500).json(error);

  }

}

export async function handleDeleteUser(req:Request,res:Response,next:NextFunction) {
  const { id }=req.params;
  try {
    const user=await getUserById(id);
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    //await user.remove();
    return res.status(200).json({message: "user deleted"});
  } catch (error) {
    return res.status(500).json(error)

  }

}





