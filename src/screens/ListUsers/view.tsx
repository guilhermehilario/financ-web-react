import { CardUser, Title } from "../../components";

export function ListUsersView() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
      <Title> List users </Title>

      <CardUser></CardUser>
    </div>
  );
}
