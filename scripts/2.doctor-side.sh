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
echo --------------------------------------------------------------------
echo "Step 1: Doctor writes a prescription for the patient"
echo
echo "This prescription is written on blockchain."
echo ---------------------------------------------------------------------
near call $CONTRACT writePrescription --accountId $DOCTOR
echo
echo ----------------------------------------------------------------------
echo "Step 2: You can view prescription with this command if you want to:"
echo ----------------------------------------------------------------------
echo "Use this format"
echo ----------------------------------------------------------------------
echo 'near call $CONTRACT readPrescription '{"prescriptionId":"<Prescription Id>"}' --accountId $DOCTOR'
echo ----------------------------------------------------------------------
echo
echo
echo "Step 3: You can reach approval info after approval done by pharmacist"
echo ----------------------------------------------------------------------
echo "Use this format"
echo ----------------------------------------------------------------------
echo 'near call $CONTRACT readApproval '{"approvalId":"<Approval Id>"}' --accountId $DOCTOR'
echo
exit 0
