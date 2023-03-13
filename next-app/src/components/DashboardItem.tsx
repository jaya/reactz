import { Card, CardContent, Typography } from "@mui/material";

interface DashboardItemProps {
  title: string;
  titleFontSize?: number;
  content: string[];
  contentFontSize?: number;
  contentColor?: string;
}

export function DashboardItem({ 
  title,
  titleFontSize = 14, 
  content, 
  contentFontSize = 32, 
  contentColor = 'white' 
}: DashboardItemProps) {
  return (
    <Card sx={{
      width: 210,
      height: 130,
      opacity: 0.8,
    }}>
      <CardContent sx={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
      }}>
        <Typography fontSize={titleFontSize} textAlign='center'>
          {title}
        </Typography>

        {content.map((item, index) => (
          <Typography marginTop={1} key={index} fontSize={contentFontSize} color={contentColor}>
            {item}
          </Typography>
        ))}

      </CardContent>
    </Card>
  )
}