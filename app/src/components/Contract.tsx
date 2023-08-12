import { ethers } from "ethers"
import zkAITokenArtifact from "../../contracts/ZKAIToken.sol/ZKAIToken.json"

const zkAITokenContract = new ethers.Contract(
  "0xf7bf0D096a3EEd8Bd7f91E924d00F512Cf2C6C66",
  zkAITokenArtifact.abi
)

export default zkAITokenContract
