import "./profile.css";
import PropTypes from 'prop-types';
function Profile(props){
    return(
        <div className="profile">
     {props.children}
        <h1>{props.fullName}</h1>
        <h3>{props.bio}</h3>
        <h2>{props.profession}</h2>
        </div>


    );

       

}



 

export default Profile;

/*
Profile.PropTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired
    
};
*/