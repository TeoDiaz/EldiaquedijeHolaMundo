import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import ImgSvg from './ImgSvg'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="El dia que dije Hola Mundo" />
    <Header></Header>
    <ImgSvg></ImgSvg>
    <div>{children}</div>
  </div>
)


export default TemplateWrapper
