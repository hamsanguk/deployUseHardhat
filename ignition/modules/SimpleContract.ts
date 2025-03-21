import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

const DEFAULT_MESSAGE = "Hello, Contract!";

const SimpleContractModule = buildModule('SimpleContractModule',(m)=>{
    // 파라미터 정의
    const initialMessage = m.getParameter('initialMessage', DEFAULT_MESSAGE);

  // SimpleContract 배포
  const simpleContract = m.contract('SimpleContract', [initialMessage]);

  return { simpleContract};
} );
export default SimpleContractModule;