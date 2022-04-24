import { context, storage, RNG } from "near-sdk-as";

// Medicine Class Created
@nearBindgen
export class Medicine {
  medicineName: String;
  dosage: u8;
  usagePeriod: u8;
  usageDescription: String;

  constructor(
    medicineName: String,
    dosage: u8,
    usagePeriod: u8,
    usageDescription: String
  ) {
    this.medicineName = medicineName;
    this.dosage = dosage;
    this.usagePeriod = usagePeriod;
    this.usageDescription = usageDescription;
  }
}
// Patient Class Created
@nearBindgen
export class Patient {
  personalId: u64;
  firstName: String;
  lastName: String;
  age: u8;

  constructor(personalId: u64, firstName: String, lastName: String, age: u8) {
    this.personalId = personalId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
// Prescription Class Created
@nearBindgen
export class Prescription {
  prescriptionId: u32;
  timestamp: u64;
  patient: Patient;
  givenMedicines: Array<Medicine>;
  doctorId: String;
  constructor(patient: Patient) {
    this.prescriptionId = this.idGenerator();
    // const time = u64(parseInt(context.blockTimestamp.toString().slice(0, 10)));
    this.timestamp = context.blockTimestamp;
    this.patient = patient;
    this.givenMedicines = new Array<Medicine>();
    this.doctorId = context.sender;
  }

  idGenerator(): u32 {
    const random = new RNG<u32>(1, u32.MAX_VALUE);
    return random.next();
  }
  @mutateState()
  write(key: string, value: Prescription): string {
    storage.set(key, value);
    return ` ${this.prescriptionId} Prescription was created.`;
  }
}

// Pharmacy Class Created
@nearBindgen
export class Pharmacy {
  approvalId: u32;
  timestamp: u64;
  prescriptionId: u32;
  pharmacyId: String;
  pharmacyApprove: bool;

  constructor(prescription: Prescription) {
    this.approvalId = this.idGenerator();
    this.pharmacyId = context.sender;
    this.timestamp = context.blockTimestamp;
    this.pharmacyApprove = false;
    this.prescriptionId = prescription.prescriptionId;
  }

  idGenerator(): u32 {
    const random = new RNG<u32>(1, u32.MAX_VALUE);
    return random.next();
  }
  @mutateState()
  write(key: string, value: Pharmacy): void {
    this.pharmacyApprove = true;
    storage.set(key, value);
  }
}
