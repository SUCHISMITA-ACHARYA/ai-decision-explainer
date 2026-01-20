const form = document.getElementById("decision-form");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const decision = document.getElementById("decision").value;
  const context = document.getElementById("context").value;

  loading.classList.remove("hidden");
  result.classList.add("hidden");

  try {
    const response = await fetch("http://127.0.0.1:8001/explain-decision", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        decision: decision,
        user_context: context,
      }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const raw = await response.json();
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;


    fillList("factors", data.factors);
    fillList("pros", data.pros);
    fillList("cons", data.cons);
    fillList("explanation", data.explanation);
    document.getElementById("recommendation").innerText =
      data.recommendation;

    loading.classList.add("hidden");
    result.classList.remove("hidden");
  } catch (error) {
    loading.innerText = "Something went wrong. Please try again.";
  }
});

function fillList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}
