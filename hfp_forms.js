"use strict";

/*
   Author: Guy Montenora & Lauren Chavanne
   Date: 1/15/19
   
   Filename: hfp_forms.js
  
   Alert box displayed when form is submitted.
            
*/

window.onload = setForm;
function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for submitting your information !");
      return false;
   }
}