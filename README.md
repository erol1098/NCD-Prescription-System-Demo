[www.patika.dev](https://www.patika.dev)
# `NEAR Prescription System` Demo

## 📄 Introduction

Prescription system project is considered as an alternative to the system currently used in health industry. In this project, Near Blokchain's speed, immutability and accessibility features are used. Prescription is done by the doctor without the need for any other central system. In the same way, the prescription was obtained from the pharmacist, and the necessary actions were taken and the approval process was done through BlockChain. It is possible to access these transactions at any time.
The following are the main functionalities of this smart contract:

1. Prescription is done by the doctor and write on blockchain,
2. Pharmacist take the prescription from blockchain,
3. Pharmacist approve the prescription through blockchain,
4. View prescription and approval.

## 📦 Installation

To run this project locally you need to follow the next steps:

### Step 1: Prerequisites

1. Make sure you've installed [Node.js] ≥ 12
2. Make sure you've installed yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`
4. Create a test near account [NEAR test account]
5. Install the NEAR CLI globally: [near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain

   yarn install --global near-cli

### Step 2: Configure your NEAR CLI

Configure your near-cli to authorize your test account recently created:

    near login

### Step 3: Build and make a smart contract development deploy

1. Clone repository

```bash
git clone https://github.com/erol1098/NCD-Prescription-System-Demo.git
```

2. Yarn

```bash
yarn
```

3. Execute Script 1

```bash
./scripts/1.dev-deploy.sh
```

4. Afterwards, you can execute Script 2 and Script 3

```bash
./scripts/2.doctor-side.sh
```

```bash
./scripts/3.pharmacist-side.sh
```

or execute following smart contract methods

## 📑 Exploring the `NEAR Prescription System` smart contract methods

The following commands allow you to interact with the smart contract methods using the NEAR CLI (for this you need to have a provisional smart contract deployed).

### Command to write a prescription

```bash
near call $CONTRACT writePrescription --accountId <your doctor test account>
```

### Command to get the written prescription

```bash
near view $CONTRACT readPrescription '{"prescriptionId":"<Prescription Id>"}'
```

### Command to approve the prescription

```bash
near call $CONTRACT approval '{"prescriptionId":"<Prescription Id>"}' --accountId <your pharmacist test account>
```

### Command to get the approval

```bash
near view $CONTRACT readApproval '{"approvalId":"<Approval Id>"}'
```
