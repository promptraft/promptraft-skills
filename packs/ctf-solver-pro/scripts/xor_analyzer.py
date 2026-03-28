#!/usr/bin/env python3
import argparse
import sys

def xor_bruteforce(data, hint):
    try:
        if isinstance(data, str):
            # Assume hex if it looks like hex
            if all(c in '0123456789abcdefABCDEF' for c in data.replace("0x", "").replace(" ", "")):
                data = bytes.fromhex(data.replace("0x", "").replace(" ", ""))
            else:
                data = data.encode()
        
        results = []
        for key in range(256):
            decrypted = bytes([b ^ key for b in data])
            try:
                decoded = decrypted.decode('utf-8', errors='ignore')
                if hint in decoded:
                    results.append((key, decoded))
            except:
                pass
        
        return results
    except Exception as e:
        return [f"Error XOR Analyzing: {e}"]

def main():
    parser = argparse.ArgumentParser(description='XOR Key Analyzer')
    parser.add_argument('input', help='Input hex or string to XOR analyze')
    parser.add_argument('--hint', default='flag{', help='Hint to look for in results (default: flag{)')
    
    args = parser.parse_args()
    results = xor_bruteforce(args.input, args.hint)

    if not results:
        print(f"No results found matching hint: {args.hint}")
    else:
        for key, res in results:
            print(f"Key: {key} (0x{key:02x}) -> {res}")

if __name__ == "__main__":
    main()
