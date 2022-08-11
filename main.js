console.log("yo");

let input = document.querySelector("[data-input]");
let blank = document.querySelector("[data-blank]");
let errMsg = document.querySelector("[data-errmsg]");
let erricon = document.querySelector("[data-erricon]");
let btn = document.querySelector("[data-submit]");
let modal = document.querySelector(".modal");
let modalBtn = document.querySelectorAll("[data-modal-btn]");
let notif = document.querySelector(".notification");

btn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    if (input.value == "patate" || input.value == "Patate") {
      modal.classList.add("is-active");
      input.classList.remove("is-danger");
      errMsg.classList.add("is-hidden");
      erricon.classList.add("is-hidden");
      notif.classList.add("is-hidden");
      input.value = "";
    } else {
      blank.querySelector(".control").classList.add("has-icons-right");
      input.classList.add("is-danger");
      errMsg.classList.remove("is-hidden");
      erricon.classList.remove("is-hidden");
      notif.classList.remove("is-hidden");
    }
  } else {
    errMsg.innerHTML = "Aucune Patate entrée.";
    blank.querySelector(".control").classList.add("has-icons-right");
    input.classList.add("is-danger");
    errMsg.classList.remove("is-hidden");
    erricon.classList.remove("is-hidden");
    notif.classList.remove("is-hidden");
  }
});

modalBtn?.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("is-active");
    if (btn.dataset.modalBtn == "next") {
      document.location.href = "/test.html";
    }
  });
});

//drpdown
let drop = document.querySelector(".dropdown");

drop?.addEventListener("click", () => {
  if (drop.classList.contains("is-active")) {
    drop.classList.remove("is-active");
  } else {
    drop.classList.add("is-active");
  }
});

let msg = document.querySelector(".message");
let msgBtn = msg?.querySelector(".delete");

msgBtn?.addEventListener("click", () => {
  msg.classList.add("is-hidden");
});

let square = document.querySelector("[data-square]");
let round = document.querySelector("[data-round]");

[square, round].forEach((b) => {
  b?.addEventListener("click", () => {
    msg.classList.remove("is-hidden");
    if (b.nextElementSibling.classList.contains("is-hidden")) {
      b.nextElementSibling.classList.remove("is-hidden");
    } else {
      b.nextElementSibling.classList.add("is-hidden");
    }
  });

  b?.nextElementSibling.childNodes.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("is-loading");
    });
  });
});
