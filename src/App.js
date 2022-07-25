import { useEffect, useState } from 'react';
import './App.css';
import log from "./Assets/log.json";
import Card from './Components/Card/Card';
import formatLog from './Utils/FormatLog';
import userInfo from "./Assets/userInfo.json";

function App() {

  const [logs, setLogs] = useState(null);

  const getLogs = async () => {
    return log;
  }

  useEffect(() => {
    getLogs().then(data => {
      setLogs(formatLog(data));
    }).catch(e => {
      console.log("Error")
    })
  }, [])

  if (!logs) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="row m-0" style={{ maxWidth: "100%", padding: "30px 10%", backgroundColor: "hsl(184deg 6% 53%)" }}>
      {
        userInfo.map((user, index) => (
          <div className="col-lg-4 col-md-6 my-3" key={index + "_user"}>
            <Card user={user} log={logs[user.fields.Id]} />
          </div>)
        )
      }
    </div>
  );
}

export default App;
