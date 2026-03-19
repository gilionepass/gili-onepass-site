const TICKET_PRICE = {
  EKAJAYA: {
    ROUND: 1200000,
    DEPARTURE: 700000,
    RETURN: 700000,
    X: 0
  },
  WAHANA: {
    ROUND: 660000,
    DEPARTURE: 380000,
    RETURN: 380000,
    X: 0
  },
  WIJAYA: {
    ROUND: 700000,
    DEPARTURE: 400000,
    RETURN: 400000,
    X: 0
  },
  SEMAYAONE: {
    NORMAL: {
      ROUND: 630000,
      DEPARTURE: 350000,
      RETURN: 350000,
      X: 0
    },
    WITH_TRANSFER: {
      ROUND: 655000,
      DEPARTURE: 365000,
      RETURN: 365000,
      X: 0
    }
  }
};

const TRANSPORT_PRICE = {
  UBUD: 350000,
  OUTER_UBUD: 400000,
  SANUR: 350000,
  KUTA: 350000,
  SEMINYAK: 350000,
  CANGGU: 400000,
  JIMBARAN: 400000,
  NUSA_DUA: 400000,
  AIRPORT: 350000,
  NIGHT_AIRPORT: 450000,
  NONE: 0
};

const MIX_RULES = {
  MIX1: {
    INBOUND: "WAHANA",
    OUTBOUND: "EKAJAYA"
  },
  MIX2: {
    INBOUND: "SEMAYAONE",
    OUTBOUND: "EKAJAYA"
  }
};

const LABELS = {
  company: {
    EKAJAYA: "EKAJAYA",
    WAHANA: "WAHANA",
    SEMAYAONE: "SEMAYA ONE",
    WIJAYA: "WIJAYA",
    MIX1: "MIX1 IN WAHANA / OUT EKAJAYA",
    MIX2: "MIX2 IN SEMAYA / OUT EKAJAYA"
  },
  roundType: {
    ROUND: "ROUND",
    DEPARTURE: "DEPARTURE",
    RETURN: "RETURN",
    X: "X"
  },
  zone: {
    NONE: "선택 안함",
    UBUD: "UBUD",
    OUTER_UBUD: "OUTER UBUD",
    SANUR: "SANUR",
    KUTA: "KUTA",
    SEMINYAK: "SEMINYAK",
    CANGGU: "CANGGU",
    JIMBARAN: "JIMBARAN",
    NUSA_DUA: "NUSA DUA",
    AIRPORT: "AIRPORT",
    NIGHT_AIRPORT: "NIGHT AIRPORT"
  }
};

let latestResult = null;

function formatIDR(value) {
  return `${Number(value).toLocaleString()} IDR`;
}

function getValue(id) {
  return document.getElementById(id).value;
}

function getNumber(id) {
  return Number(document.getElementById(id).value || 0);
}

function getSemayaPrice(roundType, withTransfer) {
  const normal = TICKET_PRICE.SEMAYAONE.NORMAL[roundType] ?? 0;
  const transfer = TICKET_PRICE.SEMAYAONE.WITH_TRANSFER[roundType] ?? 0;

  if (withTransfer === "YES") {
    return transfer || normal || 0;
  }

  if (withTransfer === "NO") {
    return normal || transfer || 0;
  }

  return transfer || normal || 0;
}

function getBaseTicketPrice(company, roundType, withTransfer) {
  if (company === "SEMAYAONE") {
    return getSemayaPrice(roundType, withTransfer);
  }

  return TICKET_PRICE[company]?.[roundType] ?? 0;
}

function calculateMixedTicket(company, roundType, people, withTransfer) {
  const rule = MIX_RULES[company];
  if (!rule) {
    return { total: 0, detail: "MIX 규칙이 없습니다" };
  }

  const inCompany = rule.INBOUND;
  const outCompany = rule.OUTBOUND;

  let inboundPrice = 0;
  let outboundPrice = 0;

  if (roundType === "ROUND") {
    inboundPrice = getBaseTicketPrice(inCompany, "DEPARTURE", withTransfer);
    outboundPrice = getBaseTicketPrice(outCompany, "RETURN", withTransfer);
  } else if (roundType === "DEPARTURE") {
    inboundPrice = getBaseTicketPrice(inCompany, "DEPARTURE", withTransfer);
  } else if (roundType === "RETURN") {
    outboundPrice = getBaseTicketPrice(outCompany, "RETURN", withTransfer);
  } else {
    return {
      total: 0,
      detail: "X 선택으로 티켓 금액은 0 처리되었습니다"
    };
  }

  const perPerson = inboundPrice + outboundPrice;
  const total = perPerson * people;

  return {
    total,
    detail:
      `혼합 티켓 계산\n` +
      `IN ${inCompany}: ${formatIDR(inboundPrice)} / 1인\n` +
      `OUT ${outCompany}: ${formatIDR(outboundPrice)} / 1인\n` +
      `혼합 티켓 합계: ${formatIDR(total)}`
  };
}

function calculateNormalTicket(company, roundType, people, withTransfer) {
  const perPerson = getBaseTicketPrice(company, roundType, withTransfer);
  const total = perPerson * people;

  return {
    total,
    detail:
      `티켓 계산\n` +
      `회사: ${LABELS.company[company]}\n` +
      `구분: ${roundType}\n` +
      `1인 단가: ${formatIDR(perPerson)}\n` +
      `티켓 합계: ${formatIDR(total)}`
  };
}

function calculateTransport(pickupZone, dropoffZone) {
  const pickup = TRANSPORT_PRICE[pickupZone] ?? 0;
  const dropoff = TRANSPORT_PRICE[dropoffZone] ?? 0;
  const total = pickup + dropoff;

  return {
    total,
    pickup,
    dropoff,
    detail:
      `교통 계산\n` +
      `픽업 ${LABELS.zone[pickupZone]}: ${formatIDR(pickup)}\n` +
      `샌딩 ${LABELS.zone[dropoffZone]}: ${formatIDR(dropoff)}\n` +
      `교통 합계: ${formatIDR(total)}`
  };
}

function runEstimate() {
  const company = getValue("company");
  const roundType = getValue("roundType");
  const people = getNumber("people");
  const withTransfer = getValue("withTransfer");
  const pickupZone = getValue("pickupZone");
  const dropoffZone = getValue("dropoffZone");

  if (!people || people < 1) {
    alert("인원 수를 1명 이상 입력해주세요");
    return;
  }

  let ticketResult;

  if (company === "MIX1" || company === "MIX2") {
    ticketResult = calculateMixedTicket(company, roundType, people, withTransfer);
  } else {
    ticketResult = calculateNormalTicket(company, roundType, people, withTransfer);
  }

  const transportResult = calculateTransport(pickupZone, dropoffZone);
  const grandTotal = ticketResult.total + transportResult.total;

  const detailText =
    `인원 수: ${people}명\n\n` +
    `${ticketResult.detail}\n\n` +
    `${transportResult.detail}\n\n` +
    `최종 총합: ${formatIDR(grandTotal)}`;

  document.getElementById("totalPrice").innerText = formatIDR(grandTotal);
  document.getElementById("detailText").innerText = detailText;

  latestResult = {
    company,
    roundType,
    people,
    withTransfer,
    pickupZone,
    dropoffZone,
    ticketTotal: ticketResult.total,
    transportTotal: transportResult.total,
    grandTotal,
    detailText
  };
}

function sendWhatsApp() {
  if (!latestResult) {
    runEstimate();
  }

  if (!latestResult) return;

  const r = latestResult;

  const message =
    `안녕하세요 길리원패스 예상 견적 문의드립니다\n\n` +
    `선박사: ${LABELS.company[r.company]}\n` +
    `여정 구분: ${LABELS.roundType[r.roundType]}\n` +
    `인원 수: ${r.people}명\n` +
    `세마야 with transfer: ${r.withTransfer}\n` +
    `픽업: ${LABELS.zone[r.pickupZone]}\n` +
    `샌딩: ${LABELS.zone[r.dropoffZone]}\n` +
    `티켓 합계: ${formatIDR(r.ticketTotal)}\n` +
    `교통 합계: ${formatIDR(r.transportTotal)}\n` +
    `예상 총금액: ${formatIDR(r.grandTotal)}`;

  const phoneNumber = "6282342481260";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const translations = {
  ko: {
    siteTitle: "Gili One Pass",
    siteSubtitle: "예상 견적을 확인하고 바로 WhatsApp으로 문의하세요",
    formTitle: "예상 견적 계산기",
    labelCompany: "선박사",
    labelRoundType: "여정 구분",
    labelPeople: "인원 수",
    labelWithTransfer: "세마야 with transfer",
    labelPickup: "픽업 지역",
    labelDropoff: "샌딩 지역",
    calcBtn: "견적 계산하기",
    waBtn: "WhatsApp 문의",
    resultTitle: "계산 결과"
  },
  en: {
    siteTitle: "Gili One Pass",
    siteSubtitle: "Check your estimate and contact us instantly on WhatsApp",
    formTitle: "Estimate Calculator",
    labelCompany: "Boat Company",
    labelRoundType: "Trip Type",
    labelPeople: "Guests",
    labelWithTransfer: "Semaya with transfer",
    labelPickup: "Pickup Area",
    labelDropoff: "Drop-off Area",
    calcBtn: "Calculate Estimate",
    waBtn: "Contact via WhatsApp",
    resultTitle: "Result"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("siteTitle").innerText = t.siteTitle;
  document.getElementById("siteSubtitle").innerText = t.siteSubtitle;
  document.getElementById("formTitle").innerText = t.formTitle;
  document.getElementById("labelCompany").innerText = t.labelCompany;
  document.getElementById("labelRoundType").innerText = t.labelRoundType;
  document.getElementById("labelPeople").innerText = t.labelPeople;
  document.getElementById("labelWithTransfer").innerText = t.labelWithTransfer;
  document.getElementById("labelPickup").innerText = t.labelPickup;
  document.getElementById("labelDropoff").innerText = t.labelDropoff;
  document.getElementById("calcBtn").innerText = t.calcBtn;
  document.getElementById("waBtn").innerText = t.waBtn;
  document.getElementById("resultTitle").innerText = t.resultTitle;
}