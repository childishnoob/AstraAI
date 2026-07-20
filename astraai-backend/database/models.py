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

    attack = Column(Boolean)

    attack_type = Column(String)

    severity = Column(String)

    summary = Column(String)

    reason = Column(String)

    recommendation = Column(String)

    mitre_id = Column(String)

    mitre_name = Column(String)

    actions = Column(String)

    ai_confidence = Column(Float)
    