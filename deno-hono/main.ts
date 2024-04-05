import { Hono } from 'https://deno.land/x/hono@v4.2.2/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

Deno.serve({ port: 3000 }, app.fetch)
