import typia, { tags } from "typia";

interface IMember {
  id: string;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

export const exampleMember = {
  id: "qsdqsdqsd",
  email: "samchon.github@gmai19l.com",
  age: 30,
};
export const exampleNotMember = {
  id: ">3",
  email: "samchon.github@",
  age: "1",
};

export const matched: boolean = typia.is<IMember>(exampleMember);

export function validateMember(member: IMember) {
  const res: typia.IValidation<IMember> = typia.validate<IMember>(member);

  if (!res.success) {
    throw new Error(`Invalid member, ${JSON.stringify(res.errors)}`);
  }
}
export const loadedTypia = `typia.ts loaded and matched is ${matched} (expected: true)`;
