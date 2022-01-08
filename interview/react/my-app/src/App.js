import { useState, useEffect } from 'react';

function App() {
  const [apiData, setapiData] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=jQuery110201501142482738942_1450853406889&tags=mount+rainier&tagmode=any&format=json&_=1450853406890");
      const data = await response.json();

      // store the data into our apiData variable
      setapiData(data) ;
    }
  }, []); 

  return (
    <div>
      <h1>Fetching data from apiData</h1>
  
      {/* display apiData from the API */}
      {apiData && (
        <div className="apiData">
  
          {/* loop over the apiData */}
          {apiData.map((item) => (  

            <ol key = { item.title} > 

            User_Name: { item.link },  

            Full_Name: { item.items[0]},  

        </ol> 
        ))
        }
          
        </div>
      )}
  
        
     
    </div>
  )
}


export default App;