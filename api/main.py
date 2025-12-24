from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import uvicorn

app = FastAPI(
    title="Verification SaaS 4c76 API",
    description="API para gerenciamento de inspeções de tubulações industriais",
    version="1.0.0"
)

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if True else ["https://your-frontend-domain.com"],
    allow_credentials=True,
    allow_methods=["*"] if True else ["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"] if True else ["Content-Type", "Authorization"],
)

# Modelos de Dados
class PipelineInspection(BaseModel):
    id: Optional[str] = None
    pipeline_type: str
    scheduled_date: datetime
    status: str = "scheduled"
    priority: str = "medium"
    description: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

# Banco de Dados Fake (Para demonstração)
fake_db = {
    "inspections": []
}

# Rotas da API
@app.get("/")
def root():
    return {
        "message": "Bem-vindo à API Verification SaaS 4c76",
        "version": "1.0.0",
        "docs_url": "/docs",
        "redoc_url": "/redoc"
    }

@app.get("/api/inspections", response_model=List[PipelineInspection])
def get_inspections():
    """Retorna todas as inspeções agendadas"""
    return fake_db["inspections"]

@app.get("/api/inspections/{inspection_id}", response_model=PipelineInspection)
def get_inspection(inspection_id: str):
    """Retorna uma inspeção específica"""
    inspection = next((i for i in fake_db["inspections"] if i["id"] == inspection_id), None)
    if not inspection:
        raise HTTPException(status_code=404, detail="Inspeção não encontrada")
    return inspection

@app.post("/api/inspections", response_model=PipelineInspection)
def create_inspection(inspection: PipelineInspection):
    """Cria uma nova inspeção de tubulação"""
    import uuid
    
    inspection_dict = inspection.dict()
    inspection_dict["id"] = str(uuid.uuid4())
    inspection_dict["created_at"] = datetime.now()
    inspection_dict["updated_at"] = datetime.now()
    
    fake_db["inspections"].append(inspection_dict)
    return inspection_dict

@app.put("/api/inspections/{inspection_id}", response_model=PipelineInspection)
def update_inspection(inspection_id: str, inspection_update: PipelineInspection):
    """Atualiza uma inspeção existente"""
    inspection = next((i for i in fake_db["inspections"] if i["id"] == inspection_id), None)
    if not inspection:
        raise HTTPException(status_code=404, detail="Inspeção não encontrada")
    
    update_data = inspection_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.now()
    
    inspection.update(update_data)
    return inspection

@app.delete("/api/inspections/{inspection_id}")
def delete_inspection(inspection_id: str):
    """Cancela uma inspeção"""
    inspection = next((i for i in fake_db["inspections"] if i["id"] == inspection_id), None)
    if not inspection:
        raise HTTPException(status_code=404, detail="Inspeção não encontrada")
    
    fake_db["inspections"].remove(inspection)
    return {"message": "Inspeção cancelada com sucesso"}

@app.get("/api/status")
def get_status():
    """Retorna o status da API"""
    return {
        "status": "online",
        "timestamp": datetime.now(),
        "inspections_count": len(fake_db["inspections"]),
        "version": "1.0.0"
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
