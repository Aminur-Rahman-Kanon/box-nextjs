import mongoose from "mongoose";
const mongoUri = process.env.MONGO_URI as string;

if (!mongoUri){
    throw new Error('Please define the MONGO_URI environmental variable');
}

//check for cached connection
let cached = (global as any).mongoose;
//if not then set mongoose global object
if (!cached){
    cached = (global as any).mongoose = {conn: null, promise: null}
}

export async function connectToDatabase () {
    if (cached.conn){
        return cached.conn;
    }

    if (!cached.promise){
        cached.promise = mongoose.connect(mongoUri, {
            bufferCommands: true
        }).then(conn => conn)
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
