import Stripe from 'stripe';
import {Request, Response} from 'express';


const secret=process.env.STRIPE_SECRET_KEY as string;
const stripe=new Stripe(secret, {apiVersion:'2022-11-15'} )

 export async function handlePayment(req:Request,res:Response){
  const { amount, paymentMethod } = req.body;
  console.log(req.body)
  try {
    const {id }=paymentMethod;
    const payment= await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm:true,
      description:'NFT payment',
    })
    return res.json({message:'sucessfull', payment})

  } catch (error:any) {
    return res.status(500).json({message:error.message})

  }
}

// module.exports = {handlePayment}
