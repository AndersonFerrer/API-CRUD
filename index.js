import { connectToDB } from './utils/moongose.js'
import { PORT } from './config.js'
import app from './app.js'

async function main() {

    app.listen(PORT)

    await connectToDB().catch(console.dir);

    console.log('Server is running', 3000)

}

main()