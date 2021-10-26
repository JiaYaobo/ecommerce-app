import styled from "styled-components";
import { useState } from "react";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { Star } from "@material-ui/icons";

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const LogitInfo = styled.div`
  display: flex;
  margin: 10px;
`;

const Left = styled.div`
  flex: 1;
`;

const PopupInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopupInfoTitle = styled.h1`
  font-size: 12px;
  font-weight: 200;
`;

const PopupInfoText = styled.span`
  font-size: 12px;
`;

const ExpTime = styled.div`
  width: 160px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExpTimeText = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-weight: 300;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid teal;
  border-radius: 50%;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.span`
  margin: 10px 0;
`;

const ProductId = styled.span`
  margin: 10px 0;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 10px 0;
`;

const ProductSize = styled.span`
  margin: 10px 0;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const LogitCompany = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogitComapnyTitle = styled.h1`
  margin-bottom: 10px;
  font-weight: 300;
`;

const LogitCompanyDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogitCompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogitCompanyImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const LogitCompanyName = styled.span`
  margin-bottom: 20px;
`;

const LogitCompanyRate = styled.span`
  display: flex;
  align-items: center;
`;

const ShipInfo = () => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 500,
    latitude: 39.9042,
    longitude: 116.4074,
    zoom: 8,
  });

  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [116.4074, 39.9042],
        [129.6332, 44.5517],
      ],
    },
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR LOGISTICS INFO</Title>
        <LogitInfo>
          <Left>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapStyle="mapbox://styles/leojia/ckv84qp6d97pp14qkbxky5dud"
            >
              <Marker
                latitude={39.9042}
                longitude={116.4074}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <Room
                  style={{ fontSize: viewport.zoom * 5, color: "crimson" }}
                />
              </Marker>
              <Popup
                latitude={39.9042}
                longitude={116.4074}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
              >
                <PopupInfo>
                  <PopupInfoTitle>Destination</PopupInfoTitle>
                  <PopupInfoText>Beijing, China</PopupInfoText>
                </PopupInfo>
              </Popup>
              <Marker
                latitude={44.5517}
                longitude={129.6332}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <Room
                  style={{ fontSize: viewport.zoom * 5, color: "crimson" }}
                />
              </Marker>
              <Popup
                latitude={44.5517}
                longitude={129.6332}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
              >
                <PopupInfo>
                  <PopupInfoTitle>Departure</PopupInfoTitle>
                  <PopupInfoText>Mudanjiang, HLJ</PopupInfoText>
                </PopupInfo>
              </Popup>
              <Source id="polylineLayer" type="geojson" data={dataOne}>
                <Layer
                  id="lineLayer"
                  type="line"
                  source="my-data"
                  layout={{
                    "line-join": "round",
                    "line-cap": "round",
                  }}
                  paint={{
                    "line-color": "rgba(3, 170, 238, 0.5)",
                    "line-width": 5,
                  }}
                />
              </Source>
              <ExpTime>
                <ExpTimeText>Expected: 3 days</ExpTimeText>
              </ExpTime>
            </ReactMapGL>
          </Left>
          <Right>
            <Product>
              <ProductTitle>YOUR PRODUCT</ProductTitle>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product Name:</b>PRODUCT
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>Product Id:</b> : 123123214
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size : </b> XL{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
            </Product>
            <Hr />
            <LogitCompany>
              <LogitComapnyTitle>LOGIT COMPANY</LogitComapnyTitle>
              <LogitCompanyDetail>
                <LogitCompanyImage src="data:image/jpeg;base64,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" />
                <LogitCompanyDetails>
                  <LogitCompanyName>
                    {" "}
                    <b>Logit Company: </b> JingDong
                  </LogitCompanyName>
                  <LogitCompanyRate>
                    {" "}
                    <b>Rating: </b> <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </LogitCompanyRate>
                </LogitCompanyDetails>
              </LogitCompanyDetail>
            </LogitCompany>
          </Right>
        </LogitInfo>
      </Wrapper>
    </Container>
  );
};

export default ShipInfo;
