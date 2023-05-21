import { Grid, ListItem } from '@mui/material';
import React from 'react';
import  './Galary.css';
import image1 from '../../../src/assets/piano1.jpg';
import image2 from '../../../src/assets/drum2jpg.jpg';
import image3 from '../../../src/assets/edgar-5HltXT-6Vgw-unsplash.jpg'
import image4 from '../../../src/assets/drum3jpg.jpg';
import image5 from '../../../src/assets/drum6pg.jpg';
import image6 from '../../../src/assets/guier3.webp';
import image7 from '../../../src/assets/violin2.jpg';
import image8 from '../../../src/assets/trampet.webp';
import image9 from '../../../src/assets/matt-walsh-owA7RNrK1Dw-unsplash.jpg';


const Galary = () => {
    return (
        // <div>
        //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        //         {Array.from(Array(6)).map((_, index) => (
        //             <Grid item  
        //             xs={image1} sm={4} md={4} key={index}>
        //                 <ListItem>xs=2</ListItem>
        //             </Grid>
        //     ))} 
        //     </Grid>
        //     {/* <img src= alt="" /> */}
        // </div>


        // <div>
        //     <div className="gallery">
        //         <div className="image-container">
        //             <img src={image1} alt="Image 1"/>
        //                 <div className="image-overlay">
        //                     <h3 className="image-title">Image 1</h3>
        //                 </div>
        //         </div>
        //         <div className="image-container">
        //             <img src={image2}  alt="Image 2"/>
        //                 <div className="image-overlay">
        //                     <h3 className="image-title">Image 2</h3>
        //                 </div>
        //         </div>
        //         <div className="image-container">
        //             <img src={image3}  alt="Image 2"/>
        //                 <div className="image-overlay">
        //                     <h3 className="image-title">Image 2</h3>
        //                 </div>
        //         </div>
               
        //     </div>

        // </div>


        <div className="gallery mt-5">
  <img src={image1} alt="Image 1"/>
  <img src={image2} alt="Image 2"/>
  <img src={image3} alt="Image 3"/>
  <img src={image4} alt="Image 4"/>
  <img src={image5} alt="Image 5"/>
  <img src={image6} alt="Image 6"/>
  <img src={image7} alt="Image 7"/>
  <img src={image8} alt="Image 8"/>
  <img src={image9} alt="Image 9"/>

  {/* <img src="path/to/image3.jpg" alt="Image 3"/>
  <img src="path/to/image4.jpg" alt="Image 4"/>
  <img src="path/to/image5.jpg" alt="Image 5"/>
  <img src="path/to/image6.jpg" alt="Image 6"/>
  <img src="path/to/image7.jpg" alt="Image 7"/>
  <img src="path/to/image8.jpg" alt="Image 8"/>
  <img src="path/to/image9.jpg" alt="Image 9"/> */}
</div>

    );
};

export default Galary;