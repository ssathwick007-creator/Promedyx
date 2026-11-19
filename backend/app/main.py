from contextlib import asynccontextmanager
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.config import settings
from app.api.v1.router import api_router
from app.init_db import init_db
from app.schemas.health import HealthCheckResponse


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan manager: initialises database tables and seeds on startup."""
    print("Starting PulseGuard Clinical Telemetry Backend...")
    try:
        init_result = init_db()
        print(f"Database setup completed: {init_result}")
    except Exception as exc:
        print(f"Warning: Database setup encountered an issue: {exc}")
    yield
    print("Shutting down PulseGuard Backend...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Intelligent, Context-Aware Real-Time Health Monitoring and Early Warning System API",
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API v1 router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get(
    "/",
    tags=["Root"],
    summary="Root Service Status",
    description="PulseGuard system descriptor and quick link to API documentation.",
)
def root_endpoint():
    return {
        "system": settings.PROJECT_NAME,
        "tagline": settings.TAGLINE,
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT,
        "documentation": "/docs",
        "health_check": f"{settings.API_V1_STR}/health",
        "status": "online",
    }


@app.get(
    "/health",
    tags=["Health & Diagnostics"],
    summary="Top-level Health Endpoint",
    description="Quick ping endpoint matching standard container orchestrator probes.",
)
def root_health():
    return {
        "status": "healthy",
        "app": settings.PROJECT_NAME,
        "version": settings.VERSION,
    }
