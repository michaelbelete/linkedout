import React  from 'react';
import Layout from "../../components/Layout";
import { signIn, signOut, getSession, useSession } from 'next-auth/client'
import Header from "../../components/Header";
import Body from "../../components/Body";
import { getLoggedInUserCompany, Company } from "../../lib/user";
class Home extends React.Component<{}, { company: any }> {

  async componentDidMount() {
    const session = await getSession();
    const company = await getLoggedInUserCompany(session?.user.email);
    this.setState({ company });
  }
  

  render() {
    return (
      <Layout>
        <Header />
        <Body company={this.state?.company}/>
      </Layout>
    )
  }

}

export default Home;

// import React from "react";
// import Layout from "../../components/Layout";
// import Header from "../../components/Header";
// import Body from "../../components/Body";
// import { GetStaticProps } from "next";
// import { getLoggedInUserCompany, Company } from "../../lib/user";
// import { getSession } from "next-auth/client";

// export const getStaticProps: GetStaticProps = async () => {
//   const s = await getSession();
//   const company = await getLoggedInUserCompany(s.user.image);
//   return {
//     props: {
//       company
//     }
//   }
// }


// const Home: React.FC<Company> = (props) => {
//   return (
//     <Layout>
//       <Header />
//       <Body/>
//       { JSON.stringify(props) }
//     </Layout>
//   );
// }

// export default Home;