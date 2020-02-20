import React from "react";
import useInput from "../hooks/useInputt";

function UserFormm() {
  const [name, bindName, resetName] = useInput("");
  const [proffession, bindProffession, resetProffession] = useInput("");

  const submitCallback = e => {
    e.preventDefault();
    alert(`The proffession of ${name} is ${proffession}`);
    resetName();
    resetProffession();
  };

  return (
    <div>
      <form onSubmit={submitCallback}>
        <div>
          <label>Name : </label>
          <input type="text" {...bindName} />
        </div>
        <br />
        <div>
          <label>Proffession : </label>
          <input type="text" {...bindProffession} />
        </div>
        <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default UserFormm;

// function UserForm() {
//   const [name, setName] = useState("")
//   const [proffession, setProffession] = useState("")

//   const submitCallback = e => {
//       e.preventDefault()
//       alert(`The proffession of ${name} is ${proffession}`)
//   }

//   return (
//       <div>
//           <form onSubmit={submitCallback}>
//               <div><label>Name : </label>
//                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//               </div><br />
//               <div><label>Proffession : </label>
//                   <input type="text" value={proffession} onChange={(e) => setProffession(e.target.value)} />
//               </div>
//               <button type="submit"> Submit</button>
//           </form>
//       </div>
//   )
// }
