"use strict"
async function sendMessage(form) {
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const content = `<b>Message from Site: </b>\n<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n<b>Message:</b> ${message}`;

  const apiToken = "8155002295:AAGwo21L6VQ0XRrGKSW4Qj9rb116stUuYog";
  const chatId = "@MaSendMessageBots";
  const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    content
  )}&parse_mode=HTML`;

  const response = await fetch(url);
  if (response.ok) {
    form.reset();
    alert("Form sent to Telegram!");
  } else {
    alert("Error sending form.");
  }
}

// const form = document.querySelector('.form');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     sendMessage(form);
// })

// async function sendMessage(form) {
//     const formData = new FormData(form);
//     // if(formData){
//         const url = 'sendmessage.php'
//         const response = await fetch(url,{
//             method: "POST",
//             body: formData
//         });
//         if(response.ok){
//             form.reset();
//             alert("Form sent!");
//         }else{
//             alert("Error");
//         }
//     }
// }