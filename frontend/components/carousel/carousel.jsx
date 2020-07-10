import React from 'react';
// class Carousel extends React.Component {
//   render() {
//     return (
//       <div className="carousel"></div>
//     );
//   }
// }

// const ImageSlide = ({ url }) => {
//   const styles = {
//     backgroundImage: `url(${url})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   };

//   return (
//     <div className="image-slide" style={styles}></div>
//   );
// }

// const Arrow = ({ direction, clickFunction, glyph }) => (
//   <div
//     className={`slide-arrow ${direction}`}
//     onClick={clickFunction}>
//     {glyph}
//   </div>
// );


export const Carousel = () => {
  return (
    <div className="myCarousel" data-ride="carousel">

      {/* <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol> */}

      {/* <div className="carousel-inner"> */}
      {/* <div className="item active"> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqQTo7tbLTmbzdlrih0G2P2XozDtsP6uxfslJim0LLN4OV7a9q&usqp=CAU" alt="minions" ></img>
      {/* </div> */}
      {/* <div className="item"> */}
      <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png" alt="Shopping" ></img>
      {/* </div> */}
      {/* </div> */}
    </div>
  )
}