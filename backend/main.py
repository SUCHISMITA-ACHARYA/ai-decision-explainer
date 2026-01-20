from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

from fastapi import FastAPI, HTTPException
from pydantic_ai import Agent
from schemas.decision_input import DecisionInput

app = FastAPI(title="AI Decision Explainer")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


agent = Agent(
    model="gpt-3.5-turbo",
    system_prompt=(
        "You are an AI decision explainer.\n"
        "Given a decision and context, respond in valid JSON with:\n"
        "- factors (list of strings)\n"
        "- pros (list of strings)\n"
        "- cons (list of strings)\n"
        "- explanation (list of steps)\n"
        "- recommendation (string)\n"
    )
)

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/explain-decision")
async def explain_decision(data: DecisionInput):
    try:
        result = await agent.run(
            f"Decision: {data.decision}\nContext: {data.user_context}"
        )
        return result.output  # plain JSON text from model
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
