/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import Header from './Header';
import RegisterContainerFormRedux
  from '../container/registerContainerFormRedux';

const Register = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async() => {
      const response = await
      fetch(`https://meowfacts.herokuapp.com`);
      const result = await response.json();

      setInfo(result);
    };

    getInfo();
  }, []);

  const onSubmit = (formData) => {
    props.button(formData);
  };

  return (
    <>
      <Header />
      <main className="main">
        <RegisterContainerFormRedux onSubmit={onSubmit} />
        <h1 className="main__h1">{info.data}</h1>
      </main>
    </>
  );
};

export default Register;
