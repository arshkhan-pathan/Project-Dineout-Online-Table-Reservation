import styled from "styled-components";
import cuisinImg from "../../assets/images/cuisine.svg";
import typeImg from "../../assets/images/type.svg";
import bestsellingImg from "../../assets/images/bestselling.svg";
import avgcostImg from "../../assets/images/avgcost.svg";
import facilityImg from "../../assets/images/facilities.svg";
import smokingImg from "../../assets/images/smoking.svg";
import airImg from "../../assets/images/snowflake.svg";
import homeImg from "../../assets/images/homedelivery.svg";
import parkingImg from "../../assets/images/parking.svg";
import takeawayImg from "../../assets/images/takeaway.svg";
import cardImg from "../../assets/images/card.svg";
import outdoorImg from "../../assets/images/outdoor.svg";
import walletImg from "../../assets/images/wallet.svg";
import Image from "next/image";

const Wrapper = styled.div`
  padding: 16px 24px 52px;

  > h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #333333;
    margin-bottom: 16px;
  }

  > p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  > span {
    font-weight: 700;
  }
`;
const DetailsWrapper = styled.div`
  margin-top: 24px;

  .details__sections {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    > img {
      margin-bottom: 28px;
    }

    .details__section--right {
      display: flex;
      flex-direction: column;
      height: 40px;
      margin-bottom: 18px;
      font-size: 14px;
      line-height: 20px;

      > h4 {
        color: #ac8e48;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        margin: inherit;
      }

      > p {
        font-weight: 400;
        color: #;
        margin-top: -15px;
      }
    }
  }

  .details__sections--last {
    display: flex;
    flex-direction: column;

    > div {
      &:nth-child(1) {
        display: flex;
        gap: 12px;

        > h4 {
          font-size: 14px;
          line-height: 20px;
          color: #ac8e48;
          font-weight: 700 !important;
        }
      }
    }

    .lastDetails__section--cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-left: 50px;
    }
  }
`;

const MiniCard = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    font-weight: 400;
    margin-left: 8px;
  }
`;

const AboutUs = ({ data }) => {
  return (
    <>
      <Wrapper>
        <h4>About Us</h4>

        <span>{data ? "Read more" : null}</span>
        <DetailsWrapper>
          <div className="details__sections">
            <Image src={cuisinImg} alt="cuisinImg" />
            <div className="details__section--right">
              <h4>CUISINE</h4>
              <p>Italian, Continental</p>
            </div>
          </div>
          <div className="details__sections">
            <Image src={typeImg} alt="typeImg" />
            <div className="details__section--right">
              <h4>TYPE</h4>
              <p>
                Cafe, Dineout Pay, Safe To Eat Out, Kolkata Operational, Hottest
                in Town
              </p>
            </div>
          </div>
          <div className="details__sections">
            <Image src={bestsellingImg} alt="bestsellingImg" />
            <div className="details__section--right">
              <h4>BESTSELLING ITEMS</h4>
              <p>Ceaser Salad, Pizza, Barbeque Chicken</p>
            </div>
          </div>
          <div className="details__sections">
            <Image src={avgcostImg} alt="avgcostImg" />
            <div className="details__section--right">
              <h4>AVERAGE COST</h4>
              <p>1,000 for Two People</p>
            </div>
          </div>
          <div className="details__sections--last">
            <div>
              <Image src={facilityImg} alt="facilityImg" />
              <h4>FACILITIES & FEATURES</h4>
            </div>
            <div className="lastDetails__section--cards">
              <MiniCard>
                <Image src={smokingImg} alt="smokingImg" />
                <p>Smoking Area</p>
              </MiniCard>
              <MiniCard>
                <Image src={airImg} alt="airImg" />
                <p>Air Conditioned</p>
              </MiniCard>
              <MiniCard>
                <Image src={homeImg} alt="homeImg" />
                <p>Home Delivery</p>
              </MiniCard>
              <MiniCard>
                <Image src={parkingImg} alt="parkingImg" />
                <p>Parking</p>
              </MiniCard>
              <MiniCard>
                <Image src={takeawayImg} alt="takeawayImg" />
                <p>Take Away</p>
              </MiniCard>
              <MiniCard>
                <Image src={cardImg} alt="cardImg" />
                <p>Cards Accepted</p>
              </MiniCard>
              <MiniCard>
                <Image src={outdoorImg} alt="outdoorImg" />
                <p>Outdoor Seating</p>
              </MiniCard>
              <MiniCard>
                <Image src={walletImg} alt="walletImg" />
                <p>Wallet Accepted</p>
              </MiniCard>
            </div>
          </div>
        </DetailsWrapper>
      </Wrapper>
    </>
  );
};

export default AboutUs;
