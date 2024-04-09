import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const OWNERS = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
]
const REQUIRED = 2


const MultiSigWallet = buildModule("MultiSigWallet", (m) => {
  const owners = m.getParameter("_owners", OWNERS);
  const required = m.getParameter("_required", REQUIRED);

  const ms = m.contract("MultiSigWallet", [owners, required]);

  return { ms };
});

export default MultiSigWallet;
