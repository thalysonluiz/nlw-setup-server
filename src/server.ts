import Fastify from "fastify";

const app = Fastify();

app.get('/', (req,res) => {
  return ''
})

const port = 3333;
app.listen({
  port
}).then(() => {
  console.log('listening on port ' + port);
});