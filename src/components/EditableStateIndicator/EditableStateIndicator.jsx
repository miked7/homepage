import React, { useState, useEffect, useRef } from "react";
import EditIcon from './../../static/img/edit-16.png';

const EditableStateIndicator = ({ userProfile }) => {
    return (
        userProfile.isEditable ? <img src={EditIcon} /> : <div />
    );
  }
  
  export default EditableStateIndicator;