import { Button } from "./components/Button";
interface Test {
  num: number;
}

export default function Breeze(test: Test) {
  console.log("welcome to breeze", test.num);
}

export { Button };
