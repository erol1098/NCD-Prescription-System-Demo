import { PersistentMap, storage } from "near-sdk-as";
import { Medicine, Patient, Prescription, Pharmacy } from "./Models";

// Create Patient
const newPatient1 = new Patient(23564776891, "Adam", "Smith", 35);
const newPatient2 = new Patient(12534546789, "Mary", "Jane", 22);
const newPatient3 = new Patient(93755456732, "John", "Bad", 47);

// Human Database, can be expanded
let humanDatabase = new PersistentMap<String, Patient>("db");
humanDatabase.set("23564776891", newPatient1);
humanDatabase.set("12534546789", newPatient2);
humanDatabase.set("93755456732", newPatient3);

// Get Patient Info From Database
export function getPatientInfo(key: String): Patient {
  let patient = humanDatabase.getSome(key);
  return patient;
}

// Write Prescription
export function writePrescription(): String {
  // Get Patient Info From Human Database With ID Number
  const newPatient = getPatientInfo("23564776891");
  const prescription = new Prescription(newPatient);

  // Give medicines
  const medicine1 = new Medicine(
    "Arveles",
    1,
    3,
    "Dont use before going to bed"
  );
  const medicine2 = new Medicine(
    "Nurofen",
    1,
    2,
    "Use after breakfast and dinner"
  );

  // Add medicines to prescription
  prescription.givenMedicines.push(medicine1);
  prescription.givenMedicines.push(medicine2);

  // Write prespection to blockchain. Use Prescription Id as key
  const key = prescription.prescriptionId.toString();
  prescription.write(key, prescription);

  return `✅ Prescription Id: ${prescription.prescriptionId}, Prescription Was Saved By Doctor ${prescription.doctorId}`;
}

// Reading prescription from blockchain
export function readPrescription(prescriptionId: string): Prescription {
  assert(
    storage.hasKey(prescriptionId),
    `🚫 Prescription Id [ ${prescriptionId} ] not found in storage.`
  );
  return storage.getSome<Prescription>(prescriptionId);
}

// Approval by Pharmacist
export function makeApproval(prescriptionId: string): String {
  const temp = storage.getSome<Prescription>(prescriptionId);
  const getMed = new Pharmacy(temp);
  getMed.pharmacyApprove = true;
  const key = getMed.approvalId.toString();
  getMed.write(key, getMed);
  return `✅ Approval Id: ${getMed.approvalId} ,Prescription Id:${temp.prescriptionId}, Prescription was approved by ${getMed.pharmacyId}`;
}

// Reading Pharmacist Approval from blockchain
export function readApproval(approvalId: string): Pharmacy {
  assert(
    storage.hasKey(approvalId),
    `🚫 Approval Id [ ${approvalId} ] not found in storage.`
  );
  return storage.getSome<Pharmacy>(approvalId);
}
