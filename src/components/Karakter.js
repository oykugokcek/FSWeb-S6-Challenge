// Karakter bileşeniniz buraya gelecek

import React from "react";
import styled from "styled-components";

export default function Karakter(props) {
  const { data, choosenName, handleClickName } = props;

  // const CharProperties = style.div`

  // `;
  const Chars = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 60px auto;
  `;
  const Char = styled.div`
    width: 25%;
    margin: 30px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 10px;
  `;

  const NameButton = styled.div`
    display: inline-block;
    font-weight: bold;
    padding: 20px;
    border: 1px solid black;
  `;

  const PersonProperties = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Chars>
      {data.map((person) => (
        <Char>
          <NameButton onClick={handleClickName(person.name)}>
            {person.name}
          </NameButton>
          {choosenName === person.name && (
            <PersonProperties>
              <p>{person.gender}</p>
              <p>{person.height}</p>
              <p>{person.mass}</p>
              <p>{person.birth_year}</p>
              <p>{person.eye_color}</p>
              <p>{person.hair_color}</p>
              <p>{person.skin_color}</p>
            </PersonProperties>
          )}
        </Char>
      ))}
    </Chars>
  );
}
