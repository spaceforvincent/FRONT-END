import React from 'react'
import { ReactComponent as BtnRent } from './btn-rent.svg'
import { ReactComponent as BtnReturn } from './btn-return.svg'
import { ReactComponent as BtnSearch } from './btn-search.svg'
import { ReactComponent as MainIcon } from './Frame 1.svg'
import {ReactComponent as Main} from './MainEx.svg'
export default function HomeScreen() {
  return (
    <div>
      <Main></Main>
        <BtnRent></BtnRent>
        <BtnReturn></BtnReturn>
        <BtnSearch></BtnSearch>
        <MainIcon></MainIcon>
    </div>
  )
}
