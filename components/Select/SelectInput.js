import React, { useState } from 'react'
import { Select, TextSelect, TextArrow } from './style';

function SelectInput(props) {
  const [txt, setTxt] = useState(props.name)


  return (
    <>
      <Select>
        <TextSelect>{txt}</TextSelect>
          <TextArrow>▲</TextArrow>
      </Select>
    </>
  )
}

export default SelectInput;