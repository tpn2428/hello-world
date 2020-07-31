module.exports = {
    overrides: [
        {
            files: '*.vue',
            options: {
                parser: 'vue',
                tabWidth: 2,
                htmlWhitespaceSensitivity: 'ignore',
                bracketSpacing: true,
            }
        },
        {
            files: '*.ts',
            options: {
                singleQuote: true,
                tabWidth: 2,
                bracketSpacing: false,
            }
        }
    ]
}
  