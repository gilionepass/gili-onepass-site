const MONTHLY_TICKET_PRICE = {
  EKAJAYA: {
    1: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 },
    2: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 },
    3: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 },
    4: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    5: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    6: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    7: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    8: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    9: { ROUND: 1200000, DEPARTURE: 600000, RETURN: 600000 },
    10: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 },
    11: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 },
    12: { ROUND: 1000000, DEPARTURE: 500000, RETURN: 550000 }
  },
  WAHANA: {
    1: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    2: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    3: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    4: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    5: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    6: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    7: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    8: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    9: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    10: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    11: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 },
    12: { ROUND: 660000, DEPARTURE: 330000, RETURN: 330000 }
  },
  SEMAYAONE: {
    1: { ROUND: 600000, DEPARTURE: 300000, RETURN: 300000 },
    2: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 },
    3: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 },
    4: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 },
    5: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 },
    6: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 },
    7: { ROUND: 655000, DEPARTURE: 340000, RETURN: 340000 },
    8: { ROUND: 655000, DEPARTURE: 315000, RETURN: 340000 },
    9: { ROUND: 655000, DEPARTURE: 315000, RETURN: 340000 },
    10: { ROUND: 655000, DEPARTURE: 315000, RETURN: 340000 },
    11: { ROUND: 655000, DEPARTURE: 315000, RETURN: 340000 },
    12: { ROUND: 630000, DEPARTURE: 315000, RETURN: 315000 }
  },
  WIJAYA: {
    1: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    2: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    3: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    4: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    5: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    6: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    7: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    8: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    9: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    10: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    11: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 },
    12: { ROUND: 650000, DEPARTURE: 325000, RETURN: 350000 }
  }
};

const TRANSPORT_PRICE = {
  NIGHT_AIRPORT: { ONEWAY: 500000, ROUND: 450000 },
  AIRPORT: { ONEWAY: 450000, ROUND: 400000 },
  KUTA: { ONEWAY: 400000, ROUND: 350000 },
  SEMINYAK: { ONEWAY: 450000, ROUND: 400000 },
  JIMBARAN: { ONEWAY: 450000, ROUND: 400000 },
  SANUR: { ONEWAY: 400000, ROUND: 350000 },
  UBUD: { ONEWAY: 400000, ROUND: 350000 },
  OUTER_UBUD: { ONEWAY: 450000, ROUND: 400000 },
  CANGGU: { ONEWAY: 450000, ROUND: 400000 },
  ULUWATU: { ONEWAY: 500000, ROUND: 450000 },
  GIANYAR: { ONEWAY: 400000, ROUND: 350000 },
  LEGIAN: { ONEWAY: 400000, ROUND: 350000 },
  MARA_RIVER_LODGE: { ONEWAY: 350000, ROUND: 300000 },
  LOVINA: { ONEWAY: 850000, ROUND: 800000 },
  X: { ONEWAY: 0, ROUND: 0 },
  NUSA_DUA: { ONEWAY: 475000, ROUND: 425000 },
  OUTER_NUSA_DUA: { ONEWAY: 500000, ROUND: 450000 },
  OUTER_CANGGU: { ONEWAY: 500000, ROUND: 450000 },
  TOUR_R800K: { ONEWAY: 850000, ROUND: 800000 },
  TOUR_R850K: { ONEWAY: 900000, ROUND: 850000 },
  TOUR_R900K: { ONEWAY: 950000, ROUND: 900000 }
};

const COMPANY_LABELS = {
  EKAJAYA: "EKAJAYA",
  WAHANA: "WAHANA",
  SEMAYAONE: "SEMAYA ONE",
  WIJAYA: "WIJAYA"
};

const ZONE_LABELS = {
  X: "선택 안함",
  NONE: "선택 안함",
  NIGHT_AIRPORT: "Night Airport",
  AIRPORT: "Airport",
  KUTA: "Kuta",
  SEMINYAK: "Seminyak",
  JIMBARAN: "Jimbaran",
  SANUR: "Sanur",
  UBUD: "Ubud",
  OUTER_UBUD: "Outer Ubud",
  CANGGU: "Canggu",
  ULUWATU: "Uluwatu",
  GIANYAR: "Gianyar",
  LEGIAN: "Legian",
  MARA_RIVER_LODGE: "Mara River Lodge",
  LOVINA: "Lovina",
  NUSA_DUA: "Nusa Dua",
  OUTER_NUSA_DUA: "OUTER Nusa Dua",
  OUTER_CANGGU: "OUTER Canggu",
  TOUR_R800K: "TOUR R800K",
  TOUR_R850K: "TOUR R850K",
  TOUR_R900K: "TOUR R900K"
};

const departureNoneEl = document.getElementById("departureNone");
const returnNoneEl = document.getElementById("returnNone");

if (departureNoneEl) {
  departureNoneEl.addEventListener("change", function () {
    const input = document.getElementById("departureDate");
    if (!input) return;
    input.disabled = this.checked;
    if (this.checked) input.value = "";
  });
}

if (returnNoneEl) {
  returnNoneEl.addEventListener("change", function () {
    const input = document.getElementById("returnDate");
    if (!input) return;
    input.disabled = this.checked;
    if (this.checked) input.value = "";
  });
}

function getMonthFromDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.getMonth() + 1;
}

function formatIDR(value) {
  return `${Number(value).toLocaleString()} IDR`;
}

function getTicketUnitPrice(company, tripType, month) {
  return MONTHLY_TICKET_PRICE[company]?.[month]?.[tripType] || 0;
}

function getTransportUnitPrice(zone, tripType) {
  if (!zone || zone === "X" || zone === "NONE") return 0;
  const key = tripType === "ROUND" ? "ROUND" : "ONEWAY";
  return TRANSPORT_PRICE[zone]?.[key] || 0;
}

function runEstimate() {
  const company = document.getElementById("company")?.value;
  const tripType = document.getElementById("roundType")?.value;
  const people = parseInt(document.getElementById("people")?.value || "0", 10);
  const pickup = document.getElementById("pickupZone")?.value;
  const dropoff = document.getElementById("dropoffZone")?.value;
  const departureDate = document.getElementById("departureDate")?.value;
  const returnDate = document.getElementById("returnDate")?.value;

  if (!company || !tripType || !people) return;

  const ticketMonth = getMonthFromDate(departureDate || returnDate);
  if (!ticketMonth) return;

  // 🎯 티켓 계산
  let ticketUnit = 0;

  if (tripType === "ROUND") {
    ticketUnit = getTicketUnitPrice(company, "ROUND", ticketMonth);
  } else if (tripType === "DEPARTURE") {
    ticketUnit = getTicketUnitPrice(company, "DEPARTURE", ticketMonth);
  } else {
    ticketUnit = getTicketUnitPrice(company, "RETURN", ticketMonth);
  }

  const ticketTotal = ticketUnit * people;

  // 🎯 차량 수
  let vehicleCount = 1;
  if (people >= 5 && people <= 8) vehicleCount = 2;
  if (people >= 9) vehicleCount = 3;

  // 🎯 픽업 샌딩
  const pickupUnit = getTransportUnitPrice(pickup, tripType);
  const dropoffUnit = getTransportUnitPrice(dropoff, tripType);

  const pickupTotal = pickupUnit * vehicleCount;
  const dropoffTotal = dropoffUnit * vehicleCount;

  const transportTotal = pickupTotal + dropoffTotal;

  // 🎯 항구세
  let taxText = "";

  if (tripType === "ROUND") {
    taxText =
      company === "EKAJAYA"
        ? "🔴 인당 항구세 50K 포함"
        : "🔴 인당 항구세 50K 미포함";
  }

  if (tripType === "DEPARTURE") {
    taxText =
      company === "EKAJAYA"
        ? "🔴 입도 항구세 30K 포함"
        : "🔴 입도 항구세 30K 미포함";
  }

  if (tripType === "RETURN") {
    taxText =
      company === "EKAJAYA"
        ? "🔴 출도 항구세 20K 포함"
        : "🔴 출도 항구세 20K 미포함";
  }

  // 🎯 총합
  const total = ticketTotal + transportTotal;
  const perPerson = Math.round(total / people);

  // 🎯 출력
  document.getElementById("totalPrice").innerText =
    "Rp " + total.toLocaleString();

  document.getElementById("resultDetail").innerText =
    `총 예상 견적\n` +
    `Rp ${total.toLocaleString()}\n` +
    `1인당 약 Rp ${perPerson.toLocaleString()}\n\n` +

    `🎫 티켓 (${people}명)\n` +
    `Rp ${ticketTotal.toLocaleString()}\n` +
    `1인 ${ticketUnit.toLocaleString()} × ${people}명\n` +
    `${taxText}\n\n` +

    `🚐 픽업 (${vehicleCount}대)\nRp ${pickupTotal.toLocaleString()}\n` +
    `🚐 샌딩 (${vehicleCount}대)\nRp ${dropoffTotal.toLocaleString()}\n\n` +

    `💰 합계 Rp ${total.toLocaleString()}`;
}

function sendWhatsApp() {
  const company = document.getElementById("company")?.value;
  const tripType = document.getElementById("roundType")?.value;
  const people = parseInt(document.getElementById("people")?.value || "0", 10);
  const pickup = document.getElementById("pickupZone")?.value;
  const dropoff = document.getElementById("dropoffZone")?.value;
  const departureDate = document.getElementById("departureDate")?.value || "미선택";
  const returnDate = document.getElementById("returnDate")?.value || "미선택";
  const total = document.getElementById("totalPrice")?.innerText || "0 IDR";

  const text =
    `길리원패스 문의\n` +
    `상품: 길리 페리티켓\n` +
    `선박사: ${COMPANY_LABELS[company] || company}\n` +
    `여정 구분: ${tripType}\n` +
    `출발 날짜: ${departureDate}\n` +
    `리턴 날짜: ${returnDate}\n` +
    `인원 수: ${people}명\n` +
    `픽업 지역: ${ZONE_LABELS[pickup] || pickup}\n` +
    `샌딩 지역: ${ZONE_LABELS[dropoff] || dropoff}\n` +
    `예상 총금액: ${total}`;

  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}
