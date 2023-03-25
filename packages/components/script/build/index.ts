import delPath from "../utils/delpath";
import { series, src, dest, parallel } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除puppy-ui
export const removeDist = () => {
  return delPath(`${pkgPath}/puppy-ui`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/puppy-ui/lib/src`))
    .pipe(dest(`${pkgPath}/puppy-ui/es/src`));
};

// 打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
