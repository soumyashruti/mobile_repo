import React  from 'react'
import './Show.css'
import {Link} from 'react-router-dom'


export default class Show extends React.Component {
  constructor(){
      super();
      this.state={
          name:""
      }
  }

  displayProduct =()=>{
      this.setState({
          name:<Child />
      })
  } 
  displayProduct1 =()=>{
      this.setState({
          name:<Child1 />
      })
  } 
  displayProduct2 =()=>{
      this.setState({
          name:<Child2 />
      })
  } 
  displayProduct3 =()=>{
      this.setState({
          name:<Child3 />
      })
  } 
 
 
         render() {
      return (
          <div> 

            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <Link class="navbar-brand" href="#"><b>My Mobile Store</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" href="#">Show Mobiles</Link>
      </li>
      <li class="nav-item7 active">
        <Link class="nav-link" to="/Home">Logout</Link>
      </li>
    </ul>
  </div>
</nav>  


<div class="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
         {/* card */}
         <div className="card-deck">
<div class="card" id="c1">
  <img className="showimg" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144838" alt="" onClick={this.displayProduct}/>
  
  <div class="card-body">
      <h5>i phone</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://static.digit.in/default/583eeb3b610ca5ab2d34ff167caae41ad695cc27.jpeg?tr=n-product_detail_leader_thumb" alt="" onClick={this.displayProduct1}/>
  <div class="card-body">
      <h5>Samsung</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://image01.realme.net/general/20200828/1598597610235.jpg" alt="" onClick={this.displayProduct2}/>
  <div class="card-body">
      <h5>Realme</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://images-na.ssl-images-amazon.com/images/I/514ETCdN3CL._SL1200_.jpg" alt="" onClick={this.displayProduct3}/>
  <div class="card-body">
      <h5>Vivo V20</h5>
  </div>
</div>
</div>


          </div>
          </div>
      )
  }
}

class Child extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144838" alt="" />
               <div className="card-body">
               <h4 className="card-title" id="bg">i-phone </h4>
               <p className="card-text" id="font">
                   Color: sklyblue <br/>
                   RAM: 16GB <br/>
                   Storage:64Gb<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child1 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://static.digit.in/default/583eeb3b610ca5ab2d34ff167caae41ad695cc27.jpeg?tr=n-product_detail_leader_thumb" alt="" />
               <div className="card-body">
               <h4 className="card-title" id="bg">Samsung</h4>
               <p className="card-text" id="font">
                   Color: Blue <br/>
                   RAM: 8GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child2 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://image01.realme.net/general/20200828/1598597610235.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title" id="bg">Realme</h4>
               <p className="card-text" id="font">
                   Color:White <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child3 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/514ETCdN3CL._SL1200_.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title" id="bg">Vivo V20</h4>
               <p className="card-text" id="font">
                   Color: Sunset Melody <br/>
                   RAM: 8GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}


























