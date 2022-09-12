const mongoose = require("mongoose")

mongoose.connect(
    process.env.MONGO_LINK,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }

)
    .then(()=>console.log("conneted to database successfully"))
    .catch(error=>console.log(error))