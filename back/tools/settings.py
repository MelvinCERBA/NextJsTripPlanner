import json

class Crypto:
    def __init__(self):
        self.start = "2022-10-01-00-00"
        self.end = None
        self.granularity = 86400
        self.authorized = [
            "ETH-USD",
            "BTC-USD"
        ]
        self.names = {}
        self.__load__()

    def __load__(self):
        with open("names.json", 'r') as f: 
            self.names = json.loads(f.read())

class RSS:
    def __init__(self):
        self.authorized = [
            "bitcoin?feed=gn",
            "ethereum?feed=gn"
        ]
        self.names = [
            "gn",
            "bitcoin?feed=gn",
            "altcoins?feed=gn",
            "ethereum?feed=gn",
            "fiscalite?feed=gn",
            "gaming?feed=gn",
            "metaverse?feed=gn",
            "mining?feed=gn",
            "nft?feed=gn",
            "play-to-earn?feed=gn",
            "regulation?feed=gn",
            "coin-hebdo?feed=gn"
        ]

class Settings:
    def __init__(self):
        self.Crypto = Crypto()
        self.RSS = RSS()