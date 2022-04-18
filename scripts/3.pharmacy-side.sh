#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$PHARMACIST environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$PHARMACIST is set to [ $PHARMACIST ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Doctor writes a prescription to the patient"
echo
echo "Patient goes to pharmacy and give pharmacist the 'Prescription Id' and 'Doctor Id'"
echo
echo "Pharmacist reads the prescription"
echo ---------------------------------------------------------
echo "Use this format"
echo ---------------------------------------------------------------------
echo "near view $CONTRACT read '{'prescriptionId':'<Prescription Id>'}'"
echo ----------------------------------------------------------------------
echo
echo
echo
echo
echo ----------------------------------------------------------------------
echo "Step 2: Pharmacist give medicines to the patient"
echo "and approves the prescription and write this approval to blockchain"
echo ----------------------------------------------------------------------
echo "Use this command"
echo ----------------------------------------------------------------------
echo "$ near call $CONTRACT approval '{'prescriptionId':'Prescription Id'}' --accountId <your pharmacist test account>"
echo ----------------------------------------------------------------------
echo
echo "Step 3: You can view approval"
echo ---------------------------------------------------------
echo "Use this format"
echo ---------------------------------------------------------------------
echo "near view $CONTRACT read '{'approvalId':'<Approval Id>'}'"
echo ----------------------------------------------------------------------
echo "now run this script again to see changes made by this file"
exit 0
