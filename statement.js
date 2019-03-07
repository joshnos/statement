import createStatementData from './createStatementData.js';

function statement (invoice, plays) { 
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data){
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: 
    ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.volumeCredits} credits\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD",
      minimumFractionDigits: 2
    }).format(aNumber/100);
  }
  
}

export default statement;
