import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {firstName: "Nurillo"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Gohst'} subtext="Accsess and manage your account transactions efficiently."/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar banks={[]} transactions={[]} user={loggedIn}/>
    </section>
  );
};
export default Home;
