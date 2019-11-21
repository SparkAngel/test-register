/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';

const Clients = (props) => {
  const state = props.register.clientName;

  return (
    <>
      <Header />
      <main className="main">
        <Link
          to="/register"
          className="main-link"
        >
          <button className="btn btn-primary btn-sm" type="button">РЕГИСТРАЦИЯ</button>
        </Link>
        <div className="main-cont">
          <div className="main-cont_wrap">
            <div className="cont-wrap_text">Имя</div>
            <div className="cont-wrap_text">Фамилия</div>
            <div className="cont-wrap_text">Дата</div>
          </div>
          {state.map(d => (
            <div
              key={Date.now() + 5}
              className="main-cont_wrap-t"
            >
              <div className="cont-wrap_text-t">
                {d.firstName}
              </div>
              <div className="cont-wrap_text-t">
                {d.LastName}
              </div>
              <div className="cont-wrap_text-t">
                {d.date}
              </div>
            </div>
          ))
          }
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

export default connect(mapStateToProps)(Clients);
