import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { PlaceData } from "../data";

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
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Left = styled.div``;

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

const ShipInfo = ({ storeId, expTime }) => {
  const [departProvince, setDepartProvince] = useState("");
  const [departCity, setDepartCity] = useState("");
  const [departLng, setDepartLng] = useState(0);
  const [departLat, setDepartLat] = useState(0);
  const [destLng, setDestLng] = useState(0);
  const [destLat, setDestLat] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  const [viewport, setViewport] = useState(null);
  const [data, setData] = useState(null);
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

  useEffect(() => {
    const getStoreDepart = async () => {
      const res = await publicRequest.get(`/store/store_place/${storeId}`);
      const data = await res.data;
      setDepartProvince(data.user_province);
      setDepartCity(data.user_city);
    };
    getStoreDepart();
  }, []);
  useEffect(() => {
    for (let coord of PlaceData) {
      if (departProvince.toLowerCase().includes(coord.city.toLowerCase())) {
        setDepartLat(coord.place[1]);
        setDepartLng(coord.place[0]);
      }
      if (
        currentUser.user_province
          .toLowerCase()
          .includes(coord.city.toLowerCase())
      ) {
        setDestLat(coord.place[1]);
        setDestLng(coord.place[0]);
      }
    }
    setViewport({
      width: 1200,
      height: 1000,
      latitude: (destLat + departLat) / 2,
      longitude: (destLng + departLng) / 2,
      zoom: 4,
    });
  }, [departProvince]);

  useEffect(() => {
    setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [departLng, departLat],
          [destLng, destLat],
        ],
      },
    });
  }, [viewport]);

  return (
    <Container>
      <Wrapper>
        <Title>YOUR LOGISTICS INFO</Title>
        <LogitInfo>
          <Left>
            {viewport && (
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/leojia/ckv84qp6d97pp14qkbxky5dud"
              >
                <Marker
                  latitude={destLat}
                  longitude={destLng}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <Room
                    style={{ fontSize: viewport.zoom * 5, color: "crimson" }}
                  />
                </Marker>
                <Popup
                  latitude={destLat}
                  longitude={destLng}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                >
                  <PopupInfo>
                    <PopupInfoTitle>Destination</PopupInfoTitle>
                    <PopupInfoText>
                      {currentUser.user_city}, {currentUser.user_province}
                    </PopupInfoText>
                  </PopupInfo>
                </Popup>
                <Marker
                  latitude={departLat}
                  longitude={departLng}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <Room
                    style={{ fontSize: viewport.zoom * 5, color: "crimson" }}
                  />
                </Marker>
                <Popup
                  latitude={departLat}
                  longitude={departLng}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                >
                  <PopupInfo>
                    <PopupInfoTitle>Departure</PopupInfoTitle>
                    <PopupInfoText>
                      {departCity}, {departProvince}
                    </PopupInfoText>
                  </PopupInfo>
                </Popup>
                <Source id="polylineLayer" type="geojson" data={data}>
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
                  <ExpTimeText>Expected: {expTime} days</ExpTimeText>
                </ExpTime>
              </ReactMapGL>
            )}
          </Left>
        </LogitInfo>
      </Wrapper>
    </Container>
  );
};

export default ShipInfo;
