import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import { TestQuery } from './Querys/TestQuery'

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootSchema',
        fields: {
            test: {
                type: TestQuery,
                async resolve(){
                    return {
                        name: 'Moises',
                        isAdmin: true
                    }
                }
            }          
        }

    })
})