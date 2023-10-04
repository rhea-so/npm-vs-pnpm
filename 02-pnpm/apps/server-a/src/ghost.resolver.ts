import { Query, Resolver } from "@nestjs/graphql";
import { Ghost } from "./ghost.entity";

@Resolver(() => Ghost)
export class GhostResolver {
  @Query(() => [Ghost])
  async ghosts(): Promise<Ghost[]> {
    return [
      {
        id: "1",
        name: "Dummy 1",
      },
      {
        id: "2",
        name: "Dummy 2",
      },
    ];
  }
}
