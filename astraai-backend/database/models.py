from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import Float

from database.database import Base


class Log(Base):

    __tablename__ = "logs"

    id = Column(Integer, primary_key=True, index=True)

    timestamp = Column(String)

    source_ip = Column(String)

    destination_ip = Column(String)

    protocol = Column(String)

    port = Column(Integer)

    bytes = Column(Integer)

    packets = Column(Integer)

    event = Column(String)

    attack = Column(String)

    attack_type = Column(String)

    severity = Column(String)

    risk_score = Column(Integer)

    summary = Column(String)

    reason = Column(String)

    recommendation = Column(String)

    impact = Column(String)

    priority = Column(String)

    mitre_id = Column(String)

    mitre_name = Column(String)

    actions = Column(String)

    containment = Column(String)

    blocked = Column(Boolean)

    response_time = Column(Float)

    ai_confidence = Column(Float)