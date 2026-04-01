import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error("Mongo URI missing");
}
client = new MongoClient(uri);
clientPromise = client.connect();
 
export default clientPromise;