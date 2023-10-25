const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://tarekulrifat205:00mRlPj2OY8M7Ddu@cluster0.jxobuiv.mongodb.net/?retryWrites=true&w=majority";

// middlewere
app.use(cors());
app.use(express.json());

// tarekulrifat205
// 00mRlPj2OY8M7Ddu



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      const userCollection = client.db('userDB').collection("users");

      app.get('/users', async(req, res)=>{
        const cursor = userCollection.find();
        const results = await cursor.toArray();
        res.send(results)
      })

      app.post('/users', async(req, res) =>{
        const user = req.body;
        console.log('new user', user);
        const result = await userCollection.insertOne(user);
        res.send(result)
      });

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('local server is running')
});

app.listen(port, ()=>{
    console.log(`Simple CRUD server is running on: ${port}`);
});