import React from 'react';
// class Carousel extends React.Component {
//   render() {
//     return (
//       <div className="carousel"></div>
//     );
//   }
// }

import carouselData from './carousel_data'; 


class LeftArrow extends React.Component {
  render() {
    return (
      <div onClick={this.props.goToPrevSlide}> 
        <button>Previous &#8592;</button> 
      </div>
    )
  }
}

class RightArrow extends React.Component {
  render() {
    return (
      <div onClick={this.props.goToNextSlide}> 
        <button>Next &#8594;</button> 
      </div>
    )
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {carousel: carouselData};
  }
  render() {
    return (
      <section>
        {console.log(this.state.carousel)}
        {
          this.state.carousel.map((s,index) =>
          <div className={
            index===this.props.activeIndex ? 'active' : 'inactive'}
            key={index}>
              <h1>{s.title}</h1>
              {/* {console.log(s.title)} */}
              <p>{s.description}</p>
          
  
          </div>
          )}
      </section>
    )
  }
}
// class Slider extends React.Component {
class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      length: carouselData.length 
    }
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length; 

    if (index < 1) {
      index = length - 1; 
    } else {
      index = index - 1; 
    }

    this.setState({
      activeIndex: index
    })
  }
  
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length; 
  
    if (index === length -1) {
      index = 0; 
    } else {
      index = index + 1; 
    }
  
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div>
        <div className="carousel">
          <LeftArrow goToPrevSlide={() => this.goToPrevSlide()}/> 
          <div>
            <Slide
              activeIndex={this.state.activeIndex}
              goToNextSlide={() => this.goToNextSlide()}
            />
          </div>
          {/* <div
            className="myCarousel"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqQTo7tbLTmbzdlrih0G2P2XozDtsP6uxfslJim0LLN4OV7a9q&usqp=CAU" alt="minions" ></img>
            <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png" alt="Shopping" ></img>
          </div> */}
          <RightArrow goToNextSlide={()=>this.goToNextSlide()}/>
        </div>
      </div>
    )
  }
}
export default Carousel; 
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


// export const Carousel = () => {
//   return (
//     <div 
//     className="myCarousel" 
//     // data-ride="carousel"
//     >
//       <Slider/>
//       {/* <ol className="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//           </ol> */}

//       {/* <div className="carousel-inner"> */}
//       {/* <div className="item active"> */}
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqQTo7tbLTmbzdlrih0G2P2XozDtsP6uxfslJim0LLN4OV7a9q&usqp=CAU" alt="minions" ></img>
//       {/* </div> */}
//       {/* <div className="item"> */}
//       <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png" alt="Shopping" ></img>
//       {/* </div> */}
//       {/* </div> */}
//     </div>
//   )
// }