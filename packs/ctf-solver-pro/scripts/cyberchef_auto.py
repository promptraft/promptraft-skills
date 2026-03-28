#!/usr/bin/env python3
import argparse
import base64
import binascii
import sys

def hex_decode(data):
    try:
        data = data.replace(" ", "").replace("0x", "")
        return binascii.unhexlify(data).decode('utf-8', errors='ignore')
    except Exception as e:
        return f"Error Decoding Hex: {e}"

def b64_decode(data):
    try:
        # Add missing padding
        missing_padding = len(data) % 4
        if missing_padding:
            data += '=' * (4 - missing_padding)
        return base64.b64decode(data).decode('utf-8', errors='ignore')
    except Exception as e:
        return f"Error Decoding Base64: {e}"

def reverse_string(data):
    return data[::-1]

def byte_swap(data):
    # Swap every two characters in hex string
    try:
        data = data.replace(" ", "").replace("0x", "")
        swapped = "".join([data[i:i+2][::-1] for i in range(0, len(data), 2)])
        return swapped
    except Exception as e:
        return f"Error Byte Swapping: {e}"

def main():
    parser = argparse.ArgumentParser(description='Automated Decoding Pipeline')
    parser.add_argument('input', help='Input string to transform')
    parser.add_argument('--hex-decode', action='store_true', help='Decode from Hex')
    parser.add_argument('--b64-decode', action='store_true', help='Decode from Base64')
    parser.add_argument('--reverse', action='store_true', help='Reverse the entire string')
    parser.add_argument('--byte-swap', action='store_true', help='Swap bytes in hex pairs')
    
    args = parser.parse_args()
    result = args.input

    if args.reverse:
        result = reverse_string(result)
    
    if args.byte_swap:
        result = byte_swap(result)

    if args.hex_decode:
        result = hex_decode(result)

    if args.b64_decode:
        result = b64_decode(result)

    print(result)

if __name__ == "__main__":
    main()
