import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Business.css'
import Modal from '../../components/Modal/Modal';
import { TextField } from '@material-ui/core';
import { BusinessService } from '../../services/BusinessService';

const Business = () => {
  const [openModal, setOpenModal] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [about, setAbout] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);

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
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
      </MapContainer>

    </>

  )
}

export default Business
