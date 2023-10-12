import Header from '@/component/Header'
import Image from 'next/image'
import Banner from '@/component/Banner'
import Cards from "@/component/Cards";
import { CardData } from "../Data/data";
import { Grid } from '@mui/material';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <main>
        <Header/>
        <Banner/>
        <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={{ xs: 8, sm: 4, md: 8, lg: 0 }}
      sx={{
        paddingTop: '60px',
        backgroundColor: 'rgba(18, 18, 18, 1) !important',
        display: 'flex',
        justifyContent: 'space',
      }}
    >
      {CardData.map((val) => (
        <Cards key={val.id} val={val} /> // Assuming 'val' is a prop for 'Cards' component
      ))}
    </Grid>
  

    <Footer/>
    
    </main>
  )
}
