import mongoose from 'mongoose'



async function main() {
  await mongoose.connect('mongodb+srv://pavithraar2002:pHgsazDM96yQdr5r@cluster0.rcizzlb.mongodb.net/nodeReact');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().then(console.log("connected to db")).catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    password:String,
    createdAt:Date
  });


  const User = mongoose.model('user', userSchema,"user");//(collection name,collectionschema)

  export default User;