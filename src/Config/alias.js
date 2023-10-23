const alias = (prefix = `src`) => ({
    '@adapters': `${prefix}/Adapters`,
    '@apis': `${prefix}/APIs`,
    '@assets': `${prefix}/Assets`,
    '@components': `${prefix}/Components`,
    '@config': `${prefix}/Config`,
    '@constants': `${prefix}/Constants`,
    '@hooks': `${prefix}/Hooks`,
    '@i18n': `${prefix}/I18n`,
    '@layouts': `${prefix}/Layouts`,
    '@modules': `${prefix}/Modules`,
    '@routes': `${prefix}/Routes`,
    '@stores': `${prefix}/Stores`,
    '@themes': `${prefix}/Themes`,
    '@type': `${prefix}/Type`,
    '@utils': `${prefix}/Utils`,
});

export default alias