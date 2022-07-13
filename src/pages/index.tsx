import { GetStaticProps } from "next";

import { getUsers } from "../lib/user";

export default function Home() {
  function fetchUsers() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  };

  return (
    <button onClick={fetchUsers}>Buscar</button>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();

  console.log(users);

  return {
    props: {
      users
    },
    revalidate: 5,
  };
};
