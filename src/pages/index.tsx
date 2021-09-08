import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Body from "../../components/Body";
import { GetStaticProps } from "next";
import { getLoggedInUser, UserProps } from "../../lib/user";

// export const getStaticProps: GetStaticProps = async () => {
  
//   const user = await getLoggedInUser();
//   return {
//     props: {
//       user
//     }
//   }
// }

type Props = {
  user: UserProps
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Header />
      <Body/>
    </Layout>
  );
}

export default Home;
