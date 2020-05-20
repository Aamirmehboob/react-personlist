import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Person = ({img, name, job, children}) => 
{
  return (
    <article className="person">
      <img src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`} alt="user"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      <p>{children}</p>
    </article>
  );
}

  const PersonList = () => {
    return (
      <section className="personlist">
        <Person img="50"  name="David" job="Web Developer"/>
        <Person img="30"  name="Chris" job="Graphic Designer">
          <p>I'm a Designer i design all type of logo's,banner's etc I'm a Designer i design all type of logo's,banner's etc</p>
        </Person>
        <Person img="20"  name="Jhon" job="Content Writer"/>
      </section>
    );

  }




  ReactDOM.render(<PersonList />, document.getElementById('root'));


