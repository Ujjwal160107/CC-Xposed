from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from contextlib import asynccontextmanager

from ml_service import MLPredictor

# Initialize the ML Service
ml_service = MLPredictor()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager for the FastAPI application.
    This runs exactly once when the server starts up.
    """
    print("[INFO] Starting up server...")
    # Load ML models into memory before accepting requests
    ml_service.load_models()
    yield
    print("[INFO] Shutting down server...")

# Initialize FastAPI app
app = FastAPI(
    title="ChatPrint Backend",
    description="Backend for the Guess Who and Style Transfer application.",
    version="1.0.0",
    lifespan=lifespan
)

# Crucial for Next.js frontend running on a different port locally
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)

# ===== Pydantic Schemas =====

class PredictRequest(BaseModel):
    text: str

class PredictResponse(BaseModel):
    author: str
    confidence: float

class TransferRequest(BaseModel):
    text: str
    target_user: str

class TransferResponse(BaseModel):
    transferred_text: str

# ===== API Endpoints =====

@app.post("/predict", response_model=PredictResponse)
async def predict_author(request: PredictRequest):
    """
    Endpoint 1: Authorship Classification
    Predicts which club board member is most likely to have said the input text.
    """
    result = ml_service.predict_author(request.text)
    return result

@app.post("/transfer", response_model=TransferResponse)
async def transfer_tone(request: TransferRequest):
    """
    Endpoint 2: Tone Transfer
    Rewrites a standard sentence into the specific chaotic typing style of the chosen board member.
    """
    transferred_text = ml_service.transfer_tone(request.text, request.target_user)
    return {"transferred_text": transferred_text}
