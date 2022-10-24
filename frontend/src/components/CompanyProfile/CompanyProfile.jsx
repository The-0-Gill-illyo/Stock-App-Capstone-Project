import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayCompanyProfile from './DisplayCompanyProfile';


const CompanyProfile = () => {

    const [companyProfile, setCompanyProfile] = useState("");
    const [searchInput, setSearchInput] = useState("");


    useEffect(() => {
  

  }, []);

    async function handleSubmit(event){
      event.preventDefault()

      let newSearch;

      console.log(companyProfile)

      try{
        let response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${searchInput}/asset-profile`, { headers: {
          'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
          console.log(response.data)

          setCompanyProfile(response.data.assetProfile);
      } catch(error){
        console.log(error.response.data)
      }
    }
    

        return ( 
            <div>
              <form onSubmit={handleSubmit}>             
              <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
                <button type='submit' className="searchButton">
                <i className="fa-fa search">Search Company Profile</i>
                </button>
              </form>
              <DisplayCompanyProfile companyProfile={companyProfile}/>             
            </div>
  );

}
 
export default CompanyProfile;