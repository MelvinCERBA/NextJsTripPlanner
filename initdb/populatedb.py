from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb://mongodb:27017/")

db = client["Count_Money"]
collection = db["users"]

many_users = [
    {
        "id" : "0000000000001",
        "username" : "admin",
        "email" : "admin",
        "password" : bcrypt.hashpw("admin".encode("utf-8"),bcrypt.gensalt()),
        "role": "admin",
        "authorized": {
            "rss" : [
                "bitcoin?feed=gn",
                "ethereum?feed=gn"
            ],
            "currencies" : [
                "ETH-USD",
                "BTC-USD"
            ]
        },
        "all": {
            "rss" : [
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
            ],
            "currencies" : [
                {
                    "name": "Bitcoin",
                    "symbol": "BTC",
                    "usym": "₿",
                    "gecko": "bitcoin"
                },
                {
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "usym": "Ξ",
                    "gecko": "ethereum"
                },
                {
                    "name": "Tether",
                    "symbol": "USDT",
                    "usym": "₮",
                    "gecko": "tether"
                },
                {
                    "name": "Cardano",
                    "symbol": "ADA",
                    "usym": "₳",
                    "gecko": "cardano"
                },
                {
                    "name": "XRP",
                    "symbol": "XRP",
                    "usym": "✕",
                    "gecko": "ripple"
                },
                {
                    "name": "Solana",
                    "symbol": "SOL",
                    "usym": "◎",
                    "gecko": "solana"
                },
                {
                    "name": "Polkadot",
                    "symbol": "DOT",
                    "usym": "●",
                    "gecko": "polkadot"
                },
                {
                    "name": "Dogecoin",
                    "symbol": "DOGE",
                    "usym": "Ð",
                    "gecko": "dogecoin"
                },
                {
                    "name": "Dai",
                    "symbol": "DAI",
                    "usym": "◈",
                    "gecko": "dai"
                },
                {
                    "name": "Litecoin",
                    "symbol": "LTC",
                    "usym": "Ł",
                    "gecko": "litecoin"
                },
                {
                    "name": "Algorand",
                    "symbol": "ALGO",
                    "usym": "Ⱥ",
                    "gecko": "algorand"
                },
                {
                    "name": "Bitcoin Cash",
                    "symbol": "BCH",
                    "usym": "Ƀ",
                    "gecko": "bitcoin-cash"
                },
                {
                    "name": "ECOMI",
                    "symbol": "OMI",
                    "usym": "Ο",
                    "gecko": "ecomi"
                },
                {
                    "name": "Internet Computer",
                    "symbol": "ICP",
                    "usym": "∞",
                    "gecko": "internet-computer"
                },
                {
                    "name": "Ethereum Classic",
                    "symbol": "ETC",
                    "usym": "ξ",
                    "gecko": "ethereum-classic"
                },
                {
                    "name": "Monero",
                    "symbol": "XMR",
                    "usym": "ɱ",
                    "gecko": "monero"
                },
                {
                    "name": "Tezos",
                    "symbol": "XTZ",
                    "usym": "ꜩ",
                    "gecko": "tezos"
                },
                {
                    "name": "Iota",
                    "symbol": "MIOTA",
                    "usym": "ɨ",
                    "gecko": "iota"
                },
                {
                    "name": "EOS",
                    "symbol": "EOS",
                    "usym": "ε",
                    "gecko": "eos"
                },
                {
                    "name": "Bitcoin SV",
                    "symbol": "BSV",
                    "usym": "Ɓ",
                    "gecko": "bitcoin-cash-sv"
                },
                {
                    "name": "Maker",
                    "symbol": "MKR",
                    "usym": "Μ",
                    "gecko": "maker"
                },
                {
                    "name": "Zcash",
                    "symbol": "ZEC",
                    "usym": "ⓩ",
                    "gecko": "zcash"
                },
                {
                    "name": "Dash",
                    "symbol": "DASH",
                    "usym": "Đ",
                    "gecko": "dash"
                },
                {
                    "name": "Nano",
                    "symbol": "XNO",
                    "usym": "Ӿ",
                    "gecko": "nano"
                },
                {
                    "name": "Augur",
                    "symbol": "REP",
                    "usym": "Ɍ",
                    "gecko": "augur"
                },
                {
                    "name": "Steem",
                    "symbol": "STEEM",
                    "usym": "ȿ",
                    "gecko": "steem"
                }
            ]
        },
        "profile" : {
          "rss" : [],
          "currencies" : []
        }
    },
    {
        "id" : "0000000000002",
        "username" : "Jonathon",
        "email" : "jonathon@gmail.com",
        "password" : bcrypt.hashpw("Jonathon".encode("utf-8"),bcrypt.gensalt()),
        "role": "admin",
        "profile" : {
          "rss" : [],
          "currencies" : []
        }
    },
    {
        "id" : "0000000000003",
        "username" : "Michael",
        "email" : "michael@gmail.com",
        "password" : bcrypt.hashpw("Michael".encode("utf-8"),bcrypt.gensalt()),
        "role": "user",
        "profile" : {
          "rss" : [],
          "currencies" : []
        }
    },
    {
        "id" : "0000000000004",
        "username" : "Jérome",
        "email" : "jerom@gmail.com",
        "password" : bcrypt.hashpw("Jérome".encode("utf-8"),bcrypt.gensalt()),
        "role": "user",
        "profile" : {
          "rss" : [],
          "currencies" : [
            "ETH-USD"
          ]
        }
    }
]

collection.insert_many(many_users)
