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
[ -z "$CONTRACT" ] && echo "Missing \$PHARMACIST environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$PHARMACIST is set to [ $PHARMACIST ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Doctor writes a prescription to the patient"
echo
echo "Patient goes to pharmacy and give pharmacist the 'Prescription Id' "
echo
echo "Pharmacist reach the prescription"
echo ---------------------------------------------------------
echo "Use this format"
echo ---------------------------------------------------------------------
echo 'near call $CONTRACT readPrescription '{"prescriptionId":"<Prescription Id>"}' --accountId $PHARMACIST'
echo ----------------------------------------------------------------------
echo
echo
echo ----------------------------------------------------------------------
echo "Step 2: Pharmacist give medicines to the patient"
echo "and approves the prescription and write this approval to blockchain"
echo ----------------------------------------------------------------------
echo "Use this command"
echo ----------------------------------------------------------------------
echo 'near call $CONTRACT makeApproval '{"prescriptionId":"<Prescription Id>"}' --accountId $PHARMACIST'
echo ----------------------------------------------------------------------
echo
echo
echo "Step 3: You can view approval"
echo ---------------------------------------------------------
echo "Use this format"
echo ---------------------------------------------------------------------
echo 'near call $CONTRACT readApproval '{"approvalId":"<Approval Id>"}' --accountId $PHARMACIST'
echo ----------------------------------------------------------------------
exit 0
