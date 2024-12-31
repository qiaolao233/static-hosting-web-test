export const wmqSleep = (delay = 1000) =>
    new Promise((_) => setTimeout(_, delay));
