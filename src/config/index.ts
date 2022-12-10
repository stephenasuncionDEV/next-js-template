import development from "./dev";
import production from "./prod";
import test from "./test";

export interface SingleConfig {
  clientURL: string;
}

export interface Config {
  development: SingleConfig;
  production: SingleConfig;
  test: SingleConfig;
}

const configs: Config = {
  development,
  production,
  test,
};

const appConfig = configs[process.env.NODE_ENV];

export default appConfig;
