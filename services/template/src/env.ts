import { load } from "dotenv";

const env = await load();

const DEFAULT_HELLO = 'UNKNOWN_WORLD';

export default {
  HELLO: env["HELLO"] || DEFAULT_HELLO,
};
