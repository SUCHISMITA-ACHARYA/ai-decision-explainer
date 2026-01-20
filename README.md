🧠 AI Decision Explainer

AI Decision Explainer is a full-stack web application that helps users make better decisions by breaking them down into clear factors, pros and cons, structured reasoning, and a final recommendation.

🌐 Live Demo

Frontend: https://ai-decision-explainer.netlify.app/  (Click on this link to open the web page). <br>
Backend API Docs: https://ai-decision-explainer.onrender.com/docs <br>


🚀 What It Does

-Users enter a decision and personal context<br>
-An AI agent analyzes the input<br>

The app returns:
-Key factors<br>
-Pros and cons<br>
-Step-by-step reasoning<br>
-A clear final recommendation<br>

The goal is to improve clarity and confidence in everyday decision-making.

🛠️ Tech Stack

Frontend:
HTML, CSS, JavaScript

Backend:
FastAPI<br>
Pydantic AI<br>

AI:
OpenRouter (LLM-based reasoning)

Deployment:
Backend: Render<br>
Frontend: Netlify<br>

⚙️ Run Locally
cd backend<br>
pip install -r requirements.txt<br>
uvicorn main:app --port 8001<br>

* Open frontend using Live Server or directly in the browser.



