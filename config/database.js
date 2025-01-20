  const mongoose = require('mongoose');
// Set strictQuery to true (or false based on your needs)
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

    const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/reactreadinglist";
    
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  // mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:admin@localhost:27017/reactreadinglist");
  // mongoose.connect(
  //   process.env.MONGODB_URI,
  //   {
  //       useCreateIndex: true,
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true
  //   }
  // );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;