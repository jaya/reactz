import { AppBar, Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import ExitToApp from '@mui/icons-material/ExitToApp';
import { api } from '../services/api';
import { Survivor } from '../types/survivor';
import { SurvivorPopup } from '../components/SurvivorPopup';

const DynamicMap = dynamic(() => import('../components/Map'), { 
  ssr: false,
})

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mapPosition, setMapPosition] = useState<[number, number] | null>(null)
  const [survivors, setSurvivors] = useState<Survivor[]>([]);
  const [survivorId, setSurvivorId] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      setMapPosition([latitude, longitude]);
      setLoading(false);
    });

    const localStorageSurvivorId = localStorage.getItem('@reactz:survivorId');

    if(localStorageSurvivorId) {
      setSurvivorId(localStorageSurvivorId);
    } else {
      // GO TO LOGIN PAGE
    }
  }, [])

  useEffect(() => {
    if(survivorId) {
      navigator.geolocation.watchPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        api.put(`/api/v1/survivors/${survivorId}`, {
          latitude,
          longitude,
        }).then(response => {
          console.log(response.data.data)
        }).catch(console.error);
      })
    }
  }, [survivorId])

  useEffect(() => {
    if(mapPosition) {
      api.get('/api/v1/survivors').then(response => {
        setSurvivors(response.data.data);
      }).catch(console.error);
    }
  }, [mapPosition])

  if (loading || !mapPosition) {
    return <p>Loading...</p>
  }

  return (
    <>
      <AppBar color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Resident Zombie
          </Typography>

          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DynamicMap 
        center={mapPosition} 
        width='100vw' 
        height='94vh' 
        marginTop='6vh' 
        markers={survivors.map(survivor => ({
          id: survivor.id,
          position: [survivor.latitude, survivor.longitude],
          children: <SurvivorPopup survivor={survivor}/>
        }))}
      />
    </>

  )
}
