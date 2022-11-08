import { useState } from "react";
import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(true);
  // Use initialEmails for state
  console.log(emails);
  const toggleRead = (email) => {
    setEmails(
      emails.map((e) => {
        if (e === email) return { ...e, read: !e.read };
        return e;
      })
    );
  };

  const toggleStar = (email) => {
    setEmails(
      emails.map((e) => {
        if (e === email) return { ...e, starred: !e.starred };
        return e;
      })
    );
  };
  const getNotreadEmails = (emailList) =>
    emailList.filter((email) => !email.read);

  // hideRead = () => {
  //   setHideRead(!hideRead);
  // };
  // return <></>;

  const getStarredEmails = () => emails.filter((email) => email.starred);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>

            <span className="count">{getStarredEmails().length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        {emails.map((email) => {
          return (
            <li
              className={email.read ? "email read" : "email unread"}
              key={email.id}
            >
              <div className="select">
                <input
                  onClick={() => toggleRead(email)}
                  className="select-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  onClick={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          );
        })}
      </main>
    </div>
  );
}

export default App;
