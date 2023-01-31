import React, { useState } from "react";
const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    setInputs({
      ...inputs, //inputs를 깊은 복사
      [id]: value,
    });
  };
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange}></input>
      </div>
      <div>
        <label>이메일</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange}></input>
      </div>
      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>
      <p>전화번호 : {tel}</p>
    </div>
  );
};

export default Input2;
