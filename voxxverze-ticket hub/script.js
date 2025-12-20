function goToSite(type) {
  let url = "";
  type = type.trim().toLowerCase(); // Normalize input

  switch (type) {
    // Movie ticket booking
    case "movie":
      url = "https://in.bookmyshow.com";
      break;
    case "pvr":
      url = "https://www.pvrcinemas.com/";
      break;
    case "paytm movie":
      url = "https://paytm.com/movies";
      break;

    // Bus booking
    case "bus":
      url = "https://www.redbus.in";
      break;
    case "abhibus":
      url = "https://www.abhibus.com/";
      break;
    case "makemytrip bus":
      url = "https://www.makemytrip.com/bus-tickets/";
      break;

    // Train booking
    case "train":
      url = "https://www.irctc.co.in";
      break;
    case "cleartip train":
      url = "https://www.cleartrip.com/trains";
      break;
    case "makemytrip train":
      url = "https://www.makemytrip.com/railways/";
      break;

    // Flight booking
    case "flight":
      url = "https://www.makemytrip.com/flights/";
      break;
    case "yatra":
      url = "https://www.yatra.com/flights";
      break;
    case "cleartrip flight":
      url = "https://www.cleartrip.com/flights";
      break;
    case "goibibo":
      url = "https://www.goibibo.com/flights/";
      break;
    case "indigo":
      url = "https://www.goindigo.in/";
      break;

    // Event / Concert / Sports tickets
    case "event":
      url = "https://www.bookmyshow.com/explore/events";
      break;
    case "insider":
      url = "https://www.insider.in/";
      break;
    case "ticketmaster":
      url = "https://www.ticketmaster.com/";
      break;

    // Holiday / Cruise packages
    case "holiday":
      url = "https://www.makemytrip.com/holidays-india/";
      break;
    case "thomascook":
      url = "https://www.thomascook.in/";
      break;

    default:
      alert("Sorry, no website found for this type!");
      return;
  }

  window.open(url, "_blank");
}
