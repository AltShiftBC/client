import React, {useState, useEffect} from "react";
import "../styles/panelDash.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import map from "../assets/map.png"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyC9DwiMV_Ilr99dLFNvqc1YVJSC8wW0Mpw"
    });
  
    const [map, setMap] = useState(null);
  
    const mapContainerStyle = {
      width: '100%',
      height: '400px',
    };
  
    const center = {
        // Here we will get this coordinates from the user input i think
      lat: -1.939826787816455,
      lng: 30.0445426438232
    };
  
    const onLoad = React.useCallback(function callback(map) {
      console.log('Map has loaded successfully');
      setMap(map);
    }, []);
  
    const onUnmount = React.useCallback(function callback(map) {
      console.log('Map has unmounted');
      setMap(null);
    }, []);
  
    useEffect(() => {
      if (loadError) {
        console.error("Error loading maps", loadError);
      }
    }, [loadError]);
  
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps</div>;
  
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        id="map-map"
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    );
  };

const PanelDashPart2 = () => {
    const statusItems = [
        {
            icon: 'gg:battery',
            iconColor: '#FF4848',
            iconBackground: '#FF6F6F21',
            label: 'Battery',
            value: '78%',
        },
        {
            icon: 'iconoir:trash-solid',
            iconColor: '#411900',
            iconBackground: '#A4540021',
            label: 'Weight',
            value: '7.6Kg',
        },
        {
            icon: 'lets-icons:pressure',
            iconColor: '#F5B100',
            iconBackground: '#FFB8003B',
            label: 'Pressure',
            value: '5atm',
        },
        {
            icon: 'ic:round-height',
            iconColor: '#4E60FF',
            iconBackground: '#4E60FF3B',
            label: 'Depth',
            value: '40m',
        },
        {
            icon: 'ion:location-outline',
            iconColor: '#04D700',
            iconBackground: '#04D7002E',
            label: 'Location',
            value: 'Lake kivu',
        },
        {
            icon: 'ic:round-sensors',
            iconColor: '#8F00FF',
            iconBackground: '#8F00FF26',
            label: 'Sensors',
            value: 'Ok',
        },
    ];
    return (
        <div className="dash-part2-div">
            <div className="part2-side-one">
                <div className="panel-mode">
                    <div >
                        <p className="mode-name">Operation mode</p>
                        <div className="mode-mode"><Icon style={{ fontSize: "25px" }} icon="mdi:auto-awesome" /><p>Automated</p></div>
                    </div>
                    <button className="mode-change">Change</button>
                </div>
                <div className="panel-speed">
                    <div>
                        <p className="mode-name">Speed</p>
                        <div className="mode-mode"><Icon style={{ fontSize: "25px" }} icon="material-symbols:speed-outline" /><p>34 Km/h</p></div>
                    </div>
                    <div className="speed-panel">
                        <div style={{ fontSize: "smaller" }}>Set max speed</div>
                        <div className="dash-stati">
                            <Icon icon="bi:lightning-fill" style={{ color: "#4E60FF" }} />
                            <div id="dash-stati-line"></div>
                            <div id="dash-stati-ellipse"></div>
                        </div>
                        <div className="dash-speed">
                            <p id="speed-init">00 km/h</p>
                            <p id="speed-final">50 km/h</p>
                        </div>
                    </div>
                </div>
                <div className="pathway">
                    <div>
                        <p className="mode-name">Pathway</p>
                        <Map />
                        <div>
                            <div className="position-div">
                                <p>Initial position:</p>
                                <div className="position-exact">
                                    <Icon icon="mdi:location-on-outline" style={{ fontSize: "x-large" }} /> &nbsp; |&nbsp; Rusizi
                                </div>
                            </div>
                            <div className="position-div">
                                <p>Return at:</p>
                                <div className="return-div">
                                    <div className="position-exact">
                                        <Icon icon="mdi:location-on-outline" style={{ fontSize: "x-large" }} /> &nbsp;|&nbsp; Idjwi island
                                    </div>
                                    <button>Set new</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="part2-side-two">
                <div className="panel-status">
                    <div className="panel-status-head">
                        <div className="head-icons"><Icon icon="pajamas:status" style={{ fontSize: "20px" }} /><p style={{ color: "#343434", fontSize: "20px" }}>Status</p></div>
                        <div className="head-icons"><div className="online-icon-div"><Icon icon="mdi:internet" style={{ fontSize: "17.5px", color: "#04D700" }} /></div><p style={{ color: "#818181", fontSize: "15px" }}>Online</p></div>
                    </div>
                    <div className="panel-status-body">
                        {statusItems.map((item, index) => (
                            <div
                                key={index}
                                className="panel-status-sub"
                                style={{
                                    color: item.value.toLowerCase() === 'ok' ? '#04D700' : undefined,
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: item.iconBackground,
                                            color: item.iconColor,
                                            borderRadius: '50px',
                                            padding: '7.5px',
                                        }}
                                    >
                                        <Icon icon={item.icon} />
                                    </div>
                                    <p style={{ color: '#000000', fontWeight: '600', fontSize: '17.5px' }}>{item.label}</p>
                                </div>
                                <div style={{ color: item.value.toLowerCase() === 'ok' ? '#04D700' : '#818181' }}>
                                    {item.value}
                                </div>
                                <Icon icon="ep:arrow-right-bold" style={{ color: '#4E60FF' }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="panel-emergencies">
                    <p id="head">Emergency</p>
                    <div><Icon icon="bi:arrow-return-right" style={{fontWeight:"700", fontSize:"20px"}}/><p>Return</p></div>
                    <div><Icon icon="ic:outline-eject" style={{fontWeight:"700", fontSize:"20px"}}/><p>Eject package</p></div>
                    <div><Icon icon="fa6-solid:power-off" style={{fontWeight:"700", fontSize:"20px"}}/><p>Shutdown</p></div>
                </div>

            </div>
        </div>
    )
}

export default PanelDashPart2