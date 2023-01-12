
const Express = require('Express');
require('dotenv').config();

const app = new Express();

const port = 3006;


app.get('/api', async (req, res) => {
  const data = await fetch(process.env.BASE_URL)
  const json = await data.json()
  // console.log(json)
  await res.status(200).send(json)
})

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
});
