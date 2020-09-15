import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { NavBar, MiddleBar } from '../nav_bar/nav_bar';


class SellPage extends React.Component {
  render () {
    return (
      <div className="sellPage">
        {/* <NavBar/>  */}
        <div className="topnav">
          <Link to='/'>
            <span className="logo">
              <img width="250" height="100" alt="tBay Logo" src={window.logoPNGURL3} />
            </span>
          </Link>

          <Link to='/'>
            COVID-19 update 
          </Link>
          <Link to='/'>
            Business tool 
          </Link>
          <Link to='/'>
            My tBay 
          </Link>
          <Link to='/'>
            Help 
          </Link>
        </div>
          <div className="sellSearch">
            <h1>Over 182 million shoppers <br/>   
            want to buy your stuff.</h1>
            <div 
            // className="search"
            >
              <input type="text" placeholder="Enter keywords or the UPC/ISBN #" />
              <button>Go</button>
            </div>
            Example: Men's blue adidas glide running shoes size 11  
          </div>
          <br/> 
          tBay is a vibrant worlwide marketplace. There's no equal. 
          <br/> 
          You want millions of people all over the world to see what you're selling? You're in the right place. 
          <br/> 
        <div className="bigAdBox">
            <div>
            {/* <img src="https://ir.ebaystatic.com/pictures/aw/sell/lnd/hero_7plus_new@2x.jpg" width="250"/> <br/> */}
            <img alt="shoes" src={window.shoes} /> <br /> <br /> 
              A pair of shoes sells
              <h4> every 2 seconds </h4>
            </div >
            <div> 
            <img alt="handbag" src={window.handbag} /> <br /> <br />
              A women's handbag sells
              <h4> every 6 seconds </h4>
            </div>
            <div>
            <img alt="phone" src={window.phone} /> <br /> <br />
              A cell phone sells 
              <h4> every 4 seconds </h4>
            </div> 
          And, by the way, we have an entire team dedicated to protect you and every item you sell. This makes tBay a safe and secure place to sell your stuff.
        </div>

          It really is easy to sell on tBay, 
        <div className="bigAdBox"> 

          <div>
            <img src={window.cameraIcon} /> <br/>
            <p>List in minutes.</p>

            <p> Snap some photos and write a great description. We'll help you price your item to sell. </p>
          </div> 
          <div>
            <img src={window.tagIcon} /> <br />
            <p> Get paid quickly and safely. </p>

            <p> When your item sells, we make the payment process easy for you and the buyer.</p>
          </div> 
          <div>
            <img src={window.shipIcon} /> <br/>
            {/* <img src={window.shipIcon} /> <br /> */}
            <p>Ship it to its new home.</p>

            <p>Box it up, print a label directly on tBay, and say farewell. It's that simple.</p>
          </div> 
        </div>
        
        <div className="bigAdBox">
          Ready to sell? <br/> 
          We're here to help. <br/> 

          Customer support is here for you to make sure your selling goes smoothly. <br/> 
          Contact customer support.   
        </div>

        <div className="bigAdBox"> 
          <div>
            <h2>Ready to sell?</h2>
            List your item for free, and earn 90% when it sells. 
            <Link to='/list'> <button>Start Selling</button> </Link>
          </div> 

          <section className="largerAdBox">
            <h2> About selling on tBay </h2>

            Selling your items online is a great way to clear space taken up by things you don’t need and make money at the same time. You can transform your used items into money with just a few words, pictures, and clicks of your mouse. Selling is all about making connections, and by using online selling sites like tBay, you can make more connections from the comfort of your own home than you could in person. When you sell stuff online you aren't limited by time or distance; you can put your things up for sale on your schedule and let buyers bid on theirs. All you need is an Internet connection and you're instantly in touch with a whole world of people who are actively looking for what you're selling. With a yard sale you might be lucky to get a few dozen people; when you sell on eBay you can reach over a hundred million. To succeed at selling, it takes a little more than just a quick description and post. You need to capture your audience's attention, and that takes communication. Start with the description; it's a great way to clarify things like size and technical specifications. Don't forget the pictures; they are key for how to sell online. Good pictures show potential buyers exactly what you have to offer, not the general details but the specifics of the one you're selling. Photographs bring your item's history to life and let bidders see exactly what you're selling. This works whether you are selling clothes or electronics because people want to see what they're getting. Let them see the shoes, the tablet, or the sparkle in that ring. Your words may provide the details, but your choice of pictures is the tool you can use to capture their attention. Happy Selling.
          </section>

        </div>


        <Link to='/'><button> or go home</button> </Link>



      </div>
    )
  }
}

export default SellPage; 