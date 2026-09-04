const WHATSAPP = "9607887941";

function openWhatsApp(message) {
  const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const nav = document.querySelector("#main-nav");
  const button = document.querySelector(".menu-toggle");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll("#main-nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector("#main-nav").classList.remove("open"));
});

document.querySelectorAll(".inquire").forEach(button => {
  button.addEventListener("click", () => {
    const subject = button.dataset.subject || "room";
    openWhatsApp(`Hello REEF SHINE Thoddoo, I would like information about the ${subject}.`);
  });
});

document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello REEF SHINE Thoddoo, I would like to make a booking request.",
    "",
    `Name: ${data.get("name")}`,
    `Check-in: ${data.get("checkin")}`,
    `Check-out: ${data.get("checkout")}`,
    `Guests: ${data.get("guests")}`,
    `Rooms: ${data.get("rooms")}`,
    `Message: ${data.get("message") || "None"}`
  ].join("\n");
  openWhatsApp(message);
});

document.querySelector("#year").textContent = new Date().getFullYear();
