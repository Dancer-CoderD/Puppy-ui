import { pkgPath } from "../utils/paths";
import run from "../utils/run";
import { series } from "gulp";

export const publishComponent = async () => {
  run("release-it", `${pkgPath}/puppy-ui`);
};
export default series(async () => publishComponent());
