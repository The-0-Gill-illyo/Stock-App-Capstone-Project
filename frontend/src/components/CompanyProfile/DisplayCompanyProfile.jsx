


export default function DisplayCompanyProfile(props){

    function handleClick(profile){

        console.log(profile)
        let profileId = profile.id.profileId
    }
    
    return(
         <h3>
            {props.companyProfile.address1}
            <br></br>
            <br></br>
            {props.companyProfile.city}
            <br></br>
            {props.companyProfile.country}
            <br></br>
            {props.companyProfile.state}
            <br></br>
            {props.companyProfile.zip}
            <br></br>
            {props.companyProfile.phone}
            <br></br>
            <br></br>
           <a href="{props.companyProfile.website}">{props.companyProfile.website}</a>
            <br></br>
            <br></br>
            {props.companyProfile.industry}
            <br></br>
            {props.companyProfile.sector}
            <br></br>
            <br></br>
            {props.companyProfile.longBusinessSummary}
            <br></br>

         </h3>
    )
}