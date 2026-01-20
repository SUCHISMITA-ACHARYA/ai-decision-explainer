🧠 AI Decision Explainer

AI Decision Explainer is a full-stack web application that helps users make better decisions by breaking them down into clear factors, pros and cons, structured reasoning, and a final recommendation.

🌐 Live Demo

Frontend: https://ai-decision-explainer.netlify.app/  (Click on this link to open the web page). <br>
Backend API Docs: https://ai-decision-explainer.onrender.com/docs


🚀 What It Does

-Users enter a decision and personal context
-An AI agent analyzes the input

The app returns:
-Key factors
-Pros and cons
-Step-by-step reasoning
-A clear final recommendation

The goal is to improve clarity and confidence in everyday decision-making.

🛠️ Tech Stack

Frontend:
HTML, CSS, JavaScript

Backend:
FastAPI
Pydantic AI

AI:
OpenRouter (LLM-based reasoning)

Deployment:
Backend: Render
Frontend: Netlify

⚙️ Run Locally
cd backend
pip install -r requirements.txt
uvicorn main:app --port 8001

* Open frontend using Live Server or directly in the browser.


