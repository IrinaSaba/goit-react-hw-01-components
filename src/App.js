import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Statistics from "./components/Statistics/Statistics.jsx"
import data from "./data/data.json";
// import friends from "./data/friends.json";
import user from "./data/user.json";
// import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* <Friendlist friends={friends} />
  
    <TransactionHistory transactions={transactions}/> */}
    </>
  );
}

export default App;
