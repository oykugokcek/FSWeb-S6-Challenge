// Karakter bileşeniniz buraya gelecek

import React from "react";
import styled from "styled-components";

export default function Karakter(props) {
  const { data } = props;

  // const CharProperties = style.div`

  // `;
  const Chars = styled.div`
    display: flex;
    background-color: blue;
    width: auto;
  `;

  return (
    <div>
      {data.map((person) => (
        <Chars>
          <button>{person.name}</button>
          <div className="Properties">
            <p>{person.gender}</p>
            <p>{person.height}</p>
            <p>{person.mass}</p>
            <p>{person.birth_year}</p>
            <p>{person.eye_color}</p>
            <p>{person.hair_color}</p>
            <p>{person.skin_color}</p>
          </div>
        </Chars>
      ))}
    </div>
  );
}
