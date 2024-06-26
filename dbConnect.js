const mongoose = require("mongoose");

module.exports = async () => {

    try {
        const connect = await mongoose.connect(process.env.mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
