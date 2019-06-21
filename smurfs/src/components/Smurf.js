import React from 'react';
import styled from 'styled-components'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SmurfWrapper = styled.div`
  width: 250px;
  height: 150px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
  position: relative;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  > * {
    line-height: 1.5;
  }
 h3 {
   font-weight: bold;
   font-size: 1.8rem;
 }
 strong, p {
   font-size: 1.4rem;
 }
`
const DeleteBtn = styled(FaRegTrashAlt)`
  color: red;
 position: absolute;
 right: 20px;
 bottom: 20px;
 cursor: pointer;
`
const EditBtn = styled(FaRegEdit)`
  color: orange;
 position: absolute;
 right: 50px;
 bottom: 20px;
 cursor: pointer;
`
const Smurf = props => {
  return (
    <SmurfWrapper>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <DeleteBtn  onClick={() => props.deleteSmurf(props.id)}/>
      <Link to={`/smurfs/${props.id}`}>
        <EditBtn />
      </Link>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

