import mongoose from 'mongoose'



async function main() {
  await mongoose.connect('mongodb+srv://pavithraar2002:XvL5slxe0sWayrQy@cluster0.24e1o0p.mongodb.net/EntriCrash');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().then(console.log("connected to db")).catch(err => console.log(err));

const postSchema = new mongoose.Schema({
    image: String,
    title:String,
    subtiltle:String,
    desc:String
  });


  const Post = mongoose.model('posts', postSchema,"posts");//(collection name,collectionschema)

  export default Post;