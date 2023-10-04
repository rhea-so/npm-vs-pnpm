import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Ghost {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}
