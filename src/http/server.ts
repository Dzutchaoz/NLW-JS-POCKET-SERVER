import fastify from 'fastify'
//import { request } from "http";
import { createGoal } from '../functions/create-goal'
import z from 'zod'
//import { title } from "process";

const app = fastify()

app.post('/goals', async request => {
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  })

  const body = createGoalSchema.parse(request.body)

  await createGoal({
    title: body.title,
    desiredWeeklyFrequency: body.desiredWeeklyFrequency,
  })
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
