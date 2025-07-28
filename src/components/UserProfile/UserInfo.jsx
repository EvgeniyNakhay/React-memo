import { memo } from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.user.name === nextProps.user.name;
};

// export default function UserInfo({ user }) {
//   console.log(user);
//   return (
//     <>
//       <h3>Имя: {user.name}</h3>
//       <h3>Возраст: {user.age}</h3>
//       <h3>Активен: {user.isActive ? "🟢" : "🔴"}</h3>
//     </>
//   );
// }

const UserInfo = memo(function UserInfo({ user }) {
  console.log(user);
  return (
    <>
      <h3>Имя: {user.name}</h3>
      <h3>Возраст: {user.age}</h3>
      <h3>Активен: {user.isActive ? "🟢" : "🔴"}</h3>
    </>
  );
}, areEqual);

export default UserInfo;
