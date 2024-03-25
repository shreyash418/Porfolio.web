const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const message = document.getElementById('text');

function sendEmail() {

    const bodyMessage = `Full Name : ${name.value}<br> Email: ${email.value}<br> Phone: ${number.value} <br> Subject:${subject.value}<br> Message:${message.value}`;
    Email.send({
        SecureToken : "b80a3a55-8f48-40b1-b2d1-691d4a3fa290",
        To : 'shreyash.shukla0000@gmail.com',
        From : "shreyash.shukla0000@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
      if(message == "OK"){
        Swal.fire({
            title: "Success",
            text: "Message Sent Successfully!",
            icon: "success"
          });
      }
    }
    );

    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
    form.reset();
    return false;
});
