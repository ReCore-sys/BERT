import hashlib
import os

m = hashlib.sha256()
PATH = os.path.dirname(os.path.realpath(__file__))
m.update(bytes(PATH.encode("utf-8")))
EXTID = "".join([chr(int(i, base=16) + ord("a")) for i in m.hexdigest()][:32])
print(EXTID)
