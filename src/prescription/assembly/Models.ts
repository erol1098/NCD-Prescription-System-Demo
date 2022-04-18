import { context, Context, PersistentVector, storage, RNG } from "near-sdk-as";
import {} from "date";
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
  givenDate: u64;
  patient: Patient;
  givenMedicines: Array<Medicine>;
  doctorId: String;
  constructor(patient: Patient) {
    this.prescriptionId = this.idGenerator();
    const time = u64(parseInt(context.blockTimestamp.toString().slice(0, 10)));
    this.givenDate = time;
    this.patient = patient;
    this.givenMedicines = new Array<Medicine>();
    this.doctorId = Context.sender;
  }
  getPatient(): Patient {
    return this.patient;
  }
  getDoctorId(): String {
    return this.doctorId;
  }
  getPresc(): Array<Medicine> {
    return this.givenMedicines;
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
  @mutateState()
  read(prescriptionId: string): String {
    if (storage.hasKey(prescriptionId)) {
      return `✅ Key [ ${prescriptionId} ] has value\n ${storage.getSome<String>(
        prescriptionId
      )}`;
    } else {
      return `🚫 Prescription Id [ ${prescriptionId} ] not found in storage.`;
    }
  }
}

// Pharmacy Class Created
@nearBindgen
export class Pharmacy {
  approvalId: u32;
  time: u64;
  prescriptionId: u32;
  pharmacyId: String;
  pharmacyApprove: bool;

  constructor(prescription: Prescription) {
    this.approvalId = this.idGenerator();
    this.pharmacyId = Context.sender;
    this.time = context.blockTimestamp;
    this.pharmacyApprove = false;
    this.prescriptionId = prescription.prescriptionId;
  }
  getPharmacyId(): String {
    return this.pharmacyId;
  }
  idGenerator(): u32 {
    const random = new RNG<u32>(1, u32.MAX_VALUE);
    return random.next();
  }

  @mutateState()
  write(key: string, value: Pharmacy): void {
    this.pharmacyApprove = true;
    storage.set(key, value);
    // return ` ${this.prescriptionId} Prescription was implemented by ${this.pharmacyId}.`;
  }
}
