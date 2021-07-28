import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../../../components/Sidebar";
import {
  IconBateries,
  IconEletronics,
  IconLamps,
  IconOleo,
  IconOrganics,
  IconPapeis,
} from "../../../assets/recicleImg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
type locationProp = {
  latitude: number;
  longitude: number;
};

export default function HomePage() {
  const [position, setPosition] = useState<locationProp>({
    latitude: 1,
    longitude: 1,
  });

  const getPosition = useCallback(async () => {
    await navigator.geolocation.getCurrentPosition((position) =>
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  }, []);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return (
    <HomePageContainer>
      <Sidebar>
        <h1>Bem vindo ao Ecoleta</h1>
        <h2>Ítens de coleta</h2>
        <p>Selecione um ou mais ítens abaixo para filtrar no mapa</p>
        <div className="select_items">
          <button>
            <IconLamps color="#fff" />
            <span>Lâmpadas</span>
          </button>
          <button>
            <IconBateries color="#fff" />
            <span>Pilhas e Baterias</span>
          </button>
          <button>
            <IconPapeis color="#fff" />
            <span>Papéis e Papelão</span>
          </button>
          <button>
            <IconEletronics color="#fff" />
            <span>Resíduos Eletrônicos</span>
          </button>
          <button>
            <IconOrganics color="#fff" />
            <span>Resíduos Orgânicos</span>
          </button>
          <button>
            <IconOleo color="#fff" />
            <span>Óleo de Cozinha</span>
          </button>
        </div>
      </Sidebar>
      {position.latitude !== 1 && (
        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[position.latitude, position.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 440px 1fr;
  .select_items {
    padding-top: 5px;
    display: grid;
    grid-template-columns: 165px 165px;
    gap: 20px;
    button {
      border: 1px solid ${(props) => props.theme.colors.primary};
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 165px;
      height: 158px;
      span {
        padding-top: 25px;
        font-family: "Roboto", "Segoe UI";
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: ${(props) => props.theme.textTitle};
        text-align: center;
      }
      background-color: ${(props) => props.theme.colors.primary};
      transition: all 0.2s;
      :hover {
        cursor: pointer;
        border-color: #29a361;
        background-color: #21bb67;
      }
    }
  }
`;
