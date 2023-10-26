/**
 * ----------------------
 * MongoDB Connection
 * ----------------------
 * 1. Create account
 * 2. Create an user with password
 * 3. Whitelist IP address
 * 4. database > connect > driver > Node > view full code
 * 5. change the password the uri
 * -------------------------------
 * 1. Create --- POST
 * 2. app.post("/users"/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you used the express.json() middlewere
 * 5. access data from the body : const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * res.send(result)
 * 
 * --------
 * ! Client
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add header: {'content-type' : 'applicaion/json'}
 * 5.add body: JSON.sringify(user)
 * 
 * 
 * 
 * -----------------------
 * ? READ MANY
 * -----------------------
 * 1. create a curson = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * 
 * -----------------------
 * ? DELETE
 * -----------------------
 * 1. create app.delete('/users/:id', async(req, res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(qquery)
 * 
 * ! Client
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 * */ 