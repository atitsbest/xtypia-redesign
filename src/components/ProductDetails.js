import React from "react";
import styled from "styled-components";
import { Path } from "./Path";
import { typography } from "../utils/typography";
import { media } from "../utils/styles";
import { Button } from "./Button";
import Slider from "react-slick";
import { Container } from "./Container";
import { createGlobalStyle } from "styled-components";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  .slick-dots.slick-dots {
        bottom: -15px;
        li button::before {
            font-size: 18px;
        }
  }
`;

export function ProductDetails({ name }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Wrapper>
      <StyledContainer>
        <Path to={["Home", "Sales", name]} />
        <MobileTitle>{name}</MobileTitle>
        <Images>
          <Slider {...settings}>
            <ImageWrapper>
              <Image
                src="https://media.stamps4u.co.uk/media/image/c6/38/ce/Trodat_Printy_4822_1_1000X1000_1280x1280.jpg"
                alt=""
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="https://media.stamps4u.co.uk/media/image/06/b4/f2/PR_4822_600x600@2x.jpg"
                alt=""
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="https://media.stamps4u.co.uk/media/image/25/82/c9/Co2Logo-English-Kopie5881daab1b307_600x600@2x.jpg"
                alt=""
              />
            </ImageWrapper>
          </Slider>
          <GlobalStyle />
        </Images>
        <Properties>
          <Title>{name}</Title>
          <Price>
            &euro;39,99 <small>excl. Tax</small>
          </Price>
          <ItemNo>Art.Nr.: P34913rdbk</ItemNo>
          <Separator />
          <AddToCartWrapper style={{}}>
            <Quantity>Quantity</Quantity>
            <div>
              <QtyInput type="number" value="1" />
              <AddToCart>Add to Cart</AddToCart>
            </div>
          </AddToCartWrapper>
          <Separator />
          <SectionHeader>Overview</SectionHeader>
          <Overview>
            Abdruckgröße: 58 x 22 mm, max. 6 Zeilen
            <br />
            Empfohlen für anspruchsvolle Käufer:
            <br />
            - 100% saubere Hände
            <br />
            - exaktes Platzieren des Stempelabdruckes
            <br />- unglaublich klein und leicht - Klimaneutral. Serienmäßig.
            <br />
            <SchemaImg
              src="https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3500748"
              alt=""
            />
          </Overview>
          <SectionHeader>Details</SectionHeader>
          <Overview>
            Abdruckgröße: 58 x 22 mm, max. 6 Zeilen
            <br />
            Minimierter CO2-Fußabdruck.
            <br />
            Klimaneutral durch Investitionen in vom WWF® empfohlene Gold
            Standard Klimaschutzprojekte.
          </Overview>
        </Properties>
      </StyledContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f5f5f5;
  padding: ${typography.rhythm(0.5)} 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  ${media.tablet`
    padding-left: 1em;
    padding-right: 1em;
  `}
`;

const Images = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
  padding: ${typography.rhythm(2)} 4em ${typography.rhythm(2)} 1em;

  ${media.tablet`
    flex: 1 1 100%;
    max-width: 100%;
    padding-top: 0
    padding-right: 3em; 
    padding-left: 2em;
  `}
`;

const ImageWrapper = styled.div`
  background: #f5f5f5;
`;
const Image = styled.img`
  mix-blend-mode: multiply;
  max-width: 100%;
  max-height: 100%;
`;

const Properties = styled.div`
  flex: 1 1 50%;

  ${media.tablet`
    flex: 1 1 100%;
    max-width: 100%;
  `}
`;

const MobileTitle = styled.h3`
  display: none;

  ${media.tablet`
    display: flex;
  `};
`;

const Title = styled.h1`
  margin-bottom: ${typography.rhythm(0.5)};

  ${media.tablet`
    display: none;
  `}
`;

const Price = styled.h4`
  margin-bottom: ${typography.rhythm(0.5)};
`;

const ItemNo = styled.span`
  text-transform: uppercase;
  font-size: 0.865em;
`;

const Separator = styled.hr`
  color: #e9e9e9;
  background-color: #e9e9e9;
  margin: ${typography.rhythm(0.75)} 0;
  height: 1px;
`;

const AddToCartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Quantity = styled.label`
  flex: 1 0 100%;
  text-transform: uppercase;
  font-size: 0.865em;
  font-weight: normal;
  color: #a5a5a5;
  margin-bottom: ${typography.rhythm(0.5)};
`;

const QtyInput = styled.input`
  width: 5em;
  text-align: right;
  margin-right: 1em;
  height: 33px;
`;

const AddToCart = styled(Button)`
  padding-left: 5em;
  padding-right: 5em;
`;

const SectionHeader = styled.h5`
  text-transform: uppercase;
  color: #a5a5a5;
  font-family: ${typography.options.bodyFontFamily.join(",")};
  font-weight: 400;
  margin-top: ${typography.rhythm(1)};
  margin-bottom: ${typography.rhythm(0.5)};
`;

const Overview = styled.p`
  white-space: pre-wrap;
`;

const SchemaImg = styled.img`
  margin-top: ${typography.rhythm(0.5)};
  mix-blend-mode: multiply;
`;

const NextArrow = props => (
  <div {...props}>
    <ChevronRightIcon size={32} color="#444" />
  </div>
);
const PrevArrow = props => (
  <div {...props}>
    <ChevronLeftIcon size={32} color="#444" />
  </div>
);
