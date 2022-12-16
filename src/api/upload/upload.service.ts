import Cloudinary from 'cloudinary';

const cloudinary=Cloudinary.v2;

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
});

export async function uploadImage(image: string) {
  try {
    const result  = await cloudinary.uploader.upload(image, {
      folder: 'dataFiles',
      use_filename: true,
      unique_filename: false,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
