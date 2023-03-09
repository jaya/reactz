import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { DashboardItem } from "./DashboardItem";

type DashboardResponse = {
  infectedPercentage: number;
  nonInfectedPercentage: number;
  totalLostPoints: number;
  resourcesAverage: {
    id: string;
    name: string;
    average: number;
  }[]
}

export function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);

  useEffect(() => {
    api.get<DashboardResponse>('/dashboard').then(response => {
      setData(response.data)
    }).catch(console.error);
  }, [])

  return (
    <Box sx={{
      position: 'absolute',
      top: 80,
      right: 10,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      zIndex: 1000,
    }}>
      <DashboardItem title="Percentage of non infected" content={[`${data?.nonInfectedPercentage}%`]} contentColor='green'/>
      
      <DashboardItem title="Percentage of infected" content={[`${data?.infectedPercentage}%`]} contentColor='red'/>

      <DashboardItem title="Total infected lost points" content={[`${data?.totalLostPoints}`]} contentColor='red'/>

      <DashboardItem 
        title="Average resources per survivor" 
        content={data?.resourcesAverage.map(item => `${item.name} - ${item.average}`) ?? []} 
        contentFontSize={16}
        contentColor='green'
      />
    </Box>
  )
}