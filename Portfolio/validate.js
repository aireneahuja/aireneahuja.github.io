function validate() {
  if (document.contactform.name.value == ""{
    alert( "Please provide your name!");
    document.contactform.name.focus() ;
    return false;
  }
  if (document.contactform.email.value == "") {
    alert( "Please provide your name!");
    document.contactform.email.focus() ;
    return false;
  {
  var eaddr = document.contactform.email.value;
  atSign = eaddr.indexOf('@')
  dotSign = eaddr.lastIndexOf('.')
  if (atSign <1 || (dotSign - atSign <2)) {
    alert("Error in email address format!");
    document.contactform.email.focus();
    return false;
  }
  if (document.contactform.message.value == "") {
    alert( "Please write your message!");
    document.contactform.message.focus() ;
    return false;

  return( true );
}
