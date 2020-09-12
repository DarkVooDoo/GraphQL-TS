import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const TestQuery = new GraphQLObjectType({
    name: 'Test',
    fields: ()=>({
        name: {type: GraphQLString},
        isAdmin: {type: GraphQLBoolean}  
    })
})