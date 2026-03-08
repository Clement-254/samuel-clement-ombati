import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portfolio dB",
    password: "2lenacos6",
    port: 5432,
})

export default pool