import styled from "styled-components";
import Image from "next/image";
import cuisinImg from "@/assets/images/cuisine.svg";
import typeImg from "@/assets/images/type.svg";
import bestsellingImg from "@/assets/images/bestselling.svg";
import avgcostImg from "@/assets/images/avgcost.svg";
import facilityImg from "@/assets/images/facilities.svg";

const Wrapper = styled.div`
  padding: 20px 24px 48px;
  font-family: var(--font-body);

  > h4 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.2;
    color: #1A1210;
    margin-bottom: 6px;
  }

  > p {
    font-size: 15px;
    line-height: 1.7;
    font-weight: 400;
    color: #9A8878;
  }

  > span {
    font-weight: 600;
    font-size: 14px;
    color: #C94F35;
    cursor: pointer;
  }
`;

const DetailsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 0;

  .details__sections {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(201, 79, 53, 0.08);

    &:last-child {
      border-bottom: none;
    }

    .details__section--right {
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-family: var(--font-body);

      > h4 {
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #C94F35;
        margin: 0;
      }

      > p {
        font-weight: 400;
        font-size: 15px;
        color: #3A2E28;
        margin: 0;
        line-height: 1.5;
      }
    }
  }

  .details__sections--last {
    padding: 14px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 14px;

      > h4 {
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #C94F35;
        margin: 0;
      }
    }

    .lastDetails__section--cards {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding-left: 0;
    }
  }
`;

const MiniCard = styled.div`
  display: inline-flex;
  align-items: center;

  > p {
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    color: #5A4E44;
    margin: 0;
    padding: 5px 12px;
    background: rgba(201, 79, 53, 0.07);
    border: 1px solid rgba(201, 79, 53, 0.15);
    border-radius: 20px;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s;

    &:hover {
      background: #C94F35;
      color: white;
      border-color: #C94F35;
      cursor: default;
    }
  }
`;

const AboutUs = ({ cuisines, data, types, charge, average, tags }) => {
  let cusineString = cuisines?.map((cusine) => cusine.name).join(", ");
  let typeString = types?.map((type) => type.name).join(", ");

  return (
    <Wrapper>
      <h4>About Us</h4>
      {data && <span>Read more</span>}

      <DetailsWrapper>
        <div className="details__sections">
          <Image src={cuisinImg} alt="cuisine" />
          <div className="details__section--right">
            <h4>Cuisine</h4>
            <p>{cusineString}</p>
          </div>
        </div>

        <div className="details__sections">
          <Image src={typeImg} alt="type" />
          <div className="details__section--right">
            <h4>Type</h4>
            <p>{typeString}</p>
          </div>
        </div>

        <div className="details__sections">
          <Image src={bestsellingImg} alt="cost per person" />
          <div className="details__section--right">
            <h4>Booking Per Person Cost</h4>
            <p>₹{charge}</p>
          </div>
        </div>

        <div className="details__sections">
          <Image src={avgcostImg} alt="average cost" />
          <div className="details__section--right">
            <h4>Average Cost</h4>
            <p>₹{average} for two people</p>
          </div>
        </div>

        <div className="details__sections--last">
          <div>
            <Image src={facilityImg} alt="facilities" />
            <h4>Facilities &amp; Features</h4>
          </div>
          <div className="lastDetails__section--cards">
            {tags?.map((tag) => (
              <MiniCard key={tag.name}>
                <p>{tag.name}</p>
              </MiniCard>
            ))}
          </div>
        </div>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default AboutUs;
