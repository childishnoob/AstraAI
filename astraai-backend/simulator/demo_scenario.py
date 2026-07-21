from simulator.attack_generator import generate_attack

DEMO_ATTACKS = [
    "Port Scan",
    "Brute Force",
    "Privilege Escalation",
    "Malware",
    "Data Exfiltration",
]

_index = 0


def next_demo_attack():
    global _index

    attack = generate_attack()

    attack["attack_type"] = DEMO_ATTACKS[_index]
    attack["event"] = DEMO_ATTACKS[_index]

    _index = (_index + 1) % len(DEMO_ATTACKS)

    return attack