import pycantonese
import sys
import json

if __name__ == '__main__':
  res = pycantonese.characters_to_jyutping(sys.argv[1])
  print(json.dumps(res, ensure_ascii=False))
