import { db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Reagar plantas', desiredWeeklyFrequency: 7 },
    { title: 'Treinar', desiredWeeklyFrequency: 5 },
    { title: 'Estudar React', desiredWeeklyFrequency: 5 },
  ])
}

seed()
