# Setting up your terminal

The scripts in this folder are designed to help you demonstrate the behavior of the contract(s) in this project.

It uses the following setup:

```sh
# set your terminal up to have 2 windows, A and B like this:
┌─────────────────────────────────┬─────────────────────────────────┐
│                                 │                                 │
│                                 │                                 │
│                A                │                B                │
│                                 │                                 │
│                                 │                                 │
└─────────────────────────────────┴─────────────────────────────────┘
```

## Terminal **A**

\_This window is used to compile, deploy and control the contract by doctor

- Environment

  ```sh
  export CONTRACT=        # depends on deployment
  export DOCTOR=           # any account you control
  export PHARMACIST=      # any account you controL
  # for example
  # export CONTRACT=dev-1615190770786-2702449
  # export DOCTOR=erol1098.testnet
  ```

- Commands

  _helper scripts_

  ```sh
  1.dev-deploy.sh               # helper: build and deploy contracts
  2.doctor-side.sh              # helper: write a prescription by doctor and call some methods

  ```

### Terminal **B**

\_This window is used the contract by pharmacist

- Environment

  ```sh
  export PHARMACIST=      # any account you controL
  # for example
  # export PHARMACIST=erol1098.testnet
  ```

- Commands

  ```sh
  2.pharmacist-side.sh          # helper: approve prescription by pharmacist and call some methods
  3.cleanup.sh                  # helper: delete build and deploy artifacts
  ```

---
