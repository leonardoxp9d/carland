/** @type {import('next').NextConfig} 
const nextConfig = {}

module.exports = nextConfig */

/*
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    // Other Next.js configuration ...
});
*/

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);