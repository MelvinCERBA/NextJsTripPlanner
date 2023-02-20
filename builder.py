#!/usr/bin/env python3

import random

class Environnement:
    def __init__(self):
        self.file = ".env"
        self.lines = []

        self.Build()

    def Build(self):
        self.Generate()
        self.Expire()
        self.Client()

        with open(self.file, 'w+') as f:
            for i in self.lines:
                f.write(f"{i}\n")

    def Client(self):
        with open(".spotify.env", 'r') as f:
            self.lines.append(f.read())

    def Expire(self):
        minutes = 10

        self.lines.append(f"EXPIRE={minutes}")

    def Generate(self):
        size = 16
        password = ""

        for i in range(0, size):
            password += str(chr(random.randint(48, 122)))

        self.lines.append(f"AES={password}")

if (__name__ == "__main__"):
    Environnement()