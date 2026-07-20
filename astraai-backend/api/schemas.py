from pydantic import BaseModel


class Log(BaseModel):
    timestamp: str
    source_ip: str
    destination_ip: str
    protocol: str
    port: int
    bytes: int
    packets: int
    event: str
    attack: bool