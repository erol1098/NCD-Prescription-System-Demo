#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$CONTRACT" ] && echo "Missing \$DOCTOR environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$DOCTOR is set to [ $DOCTOR ]"
echo
echo
echo ---------------------------------------------------------
echo "Step 1: Doctor writes a prescription for the patient"
echo
echo "This prescription is written on blockchain."
echo ---------------------------------------------------------
echo
near call $CONTRACT writePrescription --accountId $DOCTOR
echo
echo
echo
echo
echo ----------------------------------------------------------------------
echo "Step 2: You can view prescription with this command if you want to:"
echo ----------------------------------------------------------------------
echo "near view $CONTRACT readPrescription '{'prescriptionId':'<Prescription Id>'}'"
echo ----------------------------------------------------------------------
echo
echo
echo "now run this script again to see changes made by this file"
exit 0
