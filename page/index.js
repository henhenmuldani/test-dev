function addContact(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;

  const newContact = {
    username: username,
  };

  // ambil data dari localStorage
  const contactsData = JSON.parse(localStorage.getItem("contacts")) || [];

  // tambah kontak baru ke array
  contactsData.push(newContact);

  // simpan data ke localStorage
  localStorage.setItem("contacts", JSON.stringify(contactsData));

  // redirect ke halaman utama
  window.location.href = "../index.html";
}

const addContactFormElement = document.getElementById("form-login");
addContactFormElement.addEventListener("submit", addContact);

document.getElementById("demo").innerHTML =
  "Page location is " + window.location.href;

document.getElementById("mainBtn").addEventListener("click", redirectFunction);

function redirectFunction() {
  //window.location.href = "../index.html";
  // You can also use window.location.replace method

  location.replace("https://test-dev-rose.vercel.app");
  return false;
}
