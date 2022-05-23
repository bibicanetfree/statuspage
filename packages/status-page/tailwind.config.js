/*
 * Changes in this file needs the following commands to run perfectly inside dev environment
 * npm run clean
 * npm run dev
 * in Chrome Developer Tools -> Hard Reload
 */

/* cspell:words gradientbg */

module.exports = {
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
  ],
  options: {
    safelist: ['html', 'body'],
  },
}
