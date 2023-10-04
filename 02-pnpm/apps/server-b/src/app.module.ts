import { ApolloFederationDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { GhostResolver } from "./ghost.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: "schema.gql",
    }),
  ],
  providers: [GhostResolver],
})
export class AppModule {}
