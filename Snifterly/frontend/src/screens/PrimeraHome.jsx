import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '@iconify/react';
import addOne from '@iconify/icons-icon-park-solid/add-one';
import React, { useState, useEffect } from 'react';
import {  saveJornada } from '../../api';
import { useContextState } from '../navigation/contextState';
import { Bluetooth } from '../utils/Bluetooth';
import DeviceModal from "../components/DeviceConnectionModal.jsx";

//import jornadaActiva from '../../api.js'
//import siguientePantalla from '../../api.js'



export default function PrimeraHome({ navigation }) {
      const [isModalVisible, setIsModalVisible] = useState(false)
      const { contextState, setContextState } = useContextState()

      const scanForDevices = async () => {
        const isPermissionsEnabled = await Bluetooth.requestPermissions()
        if (isPermissionsEnabled) {
            Bluetooth.scanForPeripherals()
        }
      }

      const [devices, setDevices] = useState(null)

      const getDevices = async () => {
        setDevices(await Bluetooth.getAllDevices())
      }
    
      const hideModal = () => {
        setIsModalVisible(false)
      }
    
      const openModal = async () => {
        scanForDevices()
        setIsModalVisible(true)
      }


      const crearJornada = async () => {
        const idUsuario = contextState.usuario.idUsuario
        console.log(idUsuario)
        saveJornada(idUsuario)
    }
    
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {

        getDevices()
        console.log(devices)
    },[])
    /*
    var jornadaActiva = getJornadaActiva()
    var siguientePantalla = getSiguientePantalla()

    if (!jornadaActiva) {
        setSiguientePantalla('PrimeraHome')
        //siguientePantalla = 'PrimeraHome'
    }
    else if(jornadaActiva) {
        setSiguientePantalla('Home')
        //siguientePantalla = 'Home'
    }
    siguientePantalla = getSiguientePantalla()
    */


    return (

        
        <View style={styles.container}>
            {devices != null ? (<> {/* Página post-conexión*/}</>) : (<>
            <Text style={styles.titulo}>Snifterly</Text>

            <View style={styles.botonAgregar}>
                <TouchableOpacity onPress={() => { openModal, crearJornada() }}>
                <Icon icon={addOne} />
                    {/*<Icon icon="icon-park-solid:add-one" color="white" width={144} />*/}
                </TouchableOpacity>
                <DeviceModal
                    closeModal={hideModal}
                    visible={isModalVisible}
                    connectToPeripheral={Bluetooth.getConnectedDevice()}
                    devices={Bluetooth.getAllDevices()}
                />
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 24, marginTop: 16 }}>nueva jornada</Text>
            </View>

            <View style={styles.footer}>

            </View>
            </>)}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        //backgroundImage: "linear-gradient(180deg, #FC9B29 0%, #FC8E29 0%, #FF5925 100%, #E93921)"
    },
    titulo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 48,
        marginBottom: 128,
        color: 'white',
    },
    footer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 1,
        width: '100%',
        paddingLeft: 2,
        paddingRight: 2,
    },
    botonAgregar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});