import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:codeforinterview@ac-xaw8to3-shard-00-00.idev47w.mongodb.net:27017,ac-xaw8to3-shard-00-01.idev47w.mongodb.net:27017,ac-xaw8to3-shard-00-02.idev47w.mongodb.net:27017/?ssl=true&replicaSet=atlas-aknuod-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;