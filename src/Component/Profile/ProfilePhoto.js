import React from "react";
import ProfileImg from "./ProfileImg.jpg";

function ProfilPhoto() {
  return (
    <div>
      <img src={ProfileImg} className="profil-img" alt="Profile Image" />
    </div>
  );
}

export default ProfilPhoto;