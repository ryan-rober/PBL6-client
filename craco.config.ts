const path = require(`path`);
const { alias } = require(`./src/Config/aliases`);
const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

const wbconfig = {
    webpack: {
      alias: resolvedAliases,
    },
};

export default wbconfig