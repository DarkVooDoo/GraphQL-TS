import express from 'express'
const App = express()
const PORT = 5000

import {graphqlHTTP} from 'express-graphql'
import { schema } from './GraphQL/GraphSchema'


App.use('/GraphQL', graphqlHTTP({
    schema,
    graphiql: true,

}))

App.listen(PORT, ()=> console.log(`Server PORT: ${PORT}`))