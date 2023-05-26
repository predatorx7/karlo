import logger from "pino";
import env from "./env.ts";

const main = () => {
  const log = logger.pino({
    // transport: {
    //   target: "pino-pretty",
    //   options: {
    //     colorize: true,
    //   },
    // },
  });

  log.info(`HELLO ${env.HELLO}`);
};

main();
