import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/Common/GlobalStyle'
import BackgroundImage from '../../static/beach-5878882.jpg'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
`

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const NotFoundDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 30px;
  color: white;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #469597;
    text-decoration: underline;
  }
`

const ImageCredit = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  color: white;
`

const NotFoundPage: FunctionComponent = function () {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundContent>
        <NotFoundText>OOPS!</NotFoundText>
        <NotFoundDescription>
          We're having trouble finding that page
        </NotFoundDescription>
        <GoToMainButton to="/">Go to Home</GoToMainButton>
      </NotFoundContent>
      <ImageCredit>
        BG Img: '
        <a href="https://pixabay.com/ko/users/birolbali-19733121/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5878882">
          Birol Bali
        </a>
        ', Freepik
      </ImageCredit>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
