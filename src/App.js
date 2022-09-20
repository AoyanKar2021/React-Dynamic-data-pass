import logo from './logo.svg';
import './App.css';

// function loadData()
// {
//   fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
//   .then(response=>response.json())
//   .then(data=>displaydata(data));
// }

function App() {
//  displaydata();
 let a=[
  {name:"Iphone",price:75000},
  {name:"Laptop",price:55000},
  {name:"Head Phones",price:7500},
  {name:"Watch",price:35000}
];

  return (

    
     <>
      { a.map(country=><Product name={country.name} price={country.price}></Product>)}
     </>
    
   
  
  )
}
// function displaydata(data)
// {
//   let countries=data.data;
//   let country;
//   let city;
//   let Population;
//   let year;
//   countries.forEach(element => {
//     city=element.city;
//     country=element.country;
//    let Populationcount=element.populationCounts;
//    Populationcount.forEach(element=>{
//     year=element.year;
//     Population=element.value;
//    })
//     // console.log(element);
//   });
  
// }


function Product(props)
{
  console.log(props);
  return (
    <div className='container'>
      <h1>Product Name: {props.name}</h1>
      <h2>Price: {props.price}</h2>
      {/* <img src={d}></img> */}
    </div>
  )
}

export default App;
