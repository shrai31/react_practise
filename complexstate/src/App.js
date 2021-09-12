
// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [fullName, setFullname] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });
 
//   function inputOnchange(e) {
//     console.log(e.target.name);
//     e.target.name === "fName"
//       ? setFullname({ fName: e.target.value, lName: fullName.lName })
//       : setFullname({ lName: e.target.value, fName: fullName.fName });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <p>{fullName.email}</p>
//       <form>
//         <input
//           onChange={inputOnchange}
//           name="fName"
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           onChange={inputOnchange}
//           name="lName"
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//          <button>Submit</button>
//        </form>
//      </div>
//    );
//   }
// export default App;

import React, { useState } from "react";
import './App.css';

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
