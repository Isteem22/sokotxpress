function trackDelivery() {
  const id = document.getElementById("tracking-id").value;
  const result = document.getElementById("tracking-result");

  if (id === "XP001") {
    result.innerHTML = `
      <div class="tracking-card">
        <h3>Agent Musa</h3>
        <p>Status: On the way</p>
        <p>Estimated Time: 5 minutes</p>
      </div>
    `;
  } else {
    result.innerHTML = `<p>No delivery found for Tracking ID: ${id}</p>`;
  }
}
