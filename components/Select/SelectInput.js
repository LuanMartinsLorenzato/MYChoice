import React, { useState } from 'react'
import { Select, TextSelect, TextArrow } from './style';

function SelectInput(props) {
  const [film, setFilm] = useState(props.film)
  const [food, setFood] = useState(props.food)
  const [drink, setDrink] = useState(props.drink)
  const [dessert, setDessert] = useState(props.dessert)


  return (
    <>
      <Select>
        <TextSelect>{film}</TextSelect>
          <TextArrow>▲</TextArrow>
      </Select>
    </>
  )
}

export default SelectInput;