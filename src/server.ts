import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
})

const port = 3333;
app.listen({
  port
}).then(() => {
  console.log('listening on port ' + port);
});