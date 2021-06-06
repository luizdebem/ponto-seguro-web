import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import './Business.css'
import Modal from '../../components/Modal/Modal';
import { TextField } from '@material-ui/core';
import { BusinessService } from '../../services/BusinessService';
import BusinessPin from '../../assets/business-pin.png'

function CreateIcon() {
  return L.icon({
    iconUrl: BusinessPin,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
}

const Business = () => {
  const [openModal, setOpenModal] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [about, setAbout] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [businesses, setBusinesses] = useState([]);

  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    const res = await BusinessService.getBusinesses();
    console.log(res.data.data);
    setBusinesses(res.data.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      about,
      name: businessName,
      geolocation: {
        latitude,
        longitude
      }
    }

    const res = await BusinessService.createBusiness(data);
    if (res.status === 200) {
      hideModal();
      setBusinesses([
        ...businesses,
        data
      ])
    }
  }


  return (
    <>
      <Modal show={openModal} handleClose={hideModal}>
        <h1 className="modal-title">Formulário estabelecimento seguro</h1>
        <p className="modal-description">Preencha com os dados da empresa para adicionarmos um selo ao mapa</p>

        <div className="grid-4">
          <div className="company-form-input">
            <span>Nome da empresa</span>
            <TextField onChange={(e) => setBusinessName(e.target.value)} id="outlined-basic" label="Ex: Ponto Seguro LTDA" variant="outlined" />
          </div>

          <div className="company-form-input">
            <span>Cidade/Estado</span>
            <TextField id="outlined-basic" label="Ex: Florianópolis/SC" variant="outlined" />
          </div>

          <div className="company-form-input">
            <span>Bairro</span>
            <TextField id="outlined-basic" label="Ex: Centro" variant="outlined" />
          </div>

          <div className="company-form-input">
            <span>Logradouro</span>
            <TextField id="outlined-basic" label="Ex: Avenida Rio Branco, 1510" variant="outlined" />
          </div>
        </div>

        <div className="company-form-input">
          <span>Descreva sobre os pontos de segurança da empresa</span>
          <TextField
            onChange={(e) => setAbout(e.target.value)}
            id="outlined-multiline-static"
            multiline
            placeholder="Coloque as informações de segurança da empresa"
            rows={4}
            variant="outlined"
          />
        </div>

        <div className="buttons">
          <button onClick={hideModal} className="cancel-btn">Cancelar</button>
          <button onClick={handleSubmit} className="add-btn">Adicionar selo</button>
        </div>
      </Modal>

      <MapContainer center={[-27.5929705, -48.5556297]} zoom={14} scrollWheelZoom={true} tap={false}
        whenReady={(map) => {
          console.log(map);
          map.target.on("click", function (e) {
            const { lat, lng } = e.latlng;
            setLatitude(lat);
            setLongitude(lng);
            showModal();
          });
        }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {businesses.length && businesses.map(business => (
          <Marker position={[business.geolocation.latitude, business.geolocation.longitude]} icon={CreateIcon()}>
            <Popup className="popup-business">
              { business.name }
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </>

  )
}

export default Business
