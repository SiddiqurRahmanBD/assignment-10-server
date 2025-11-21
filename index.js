const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const uri =
  "mongodb+srv://food:68mPPW7TD0xfU5UZ@duasmasi.bhtinpf.mongodb.net/?appName=Duasmasi";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    //Database

    const fooddb = client.db('fooddb');
    const foodCollection = fooddb.collection("foods");

    app.post('/add-food', async(req, res) => {
        console.log("Hittng the Users Post APi");
        const newFood = req.body;
        console.log("User Info", newFood);
        const result = await foodCollectionCollection.insertOne(newFood);
        res.send(result);

    })



    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Server Working!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
