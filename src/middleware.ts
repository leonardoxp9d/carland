
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are 
  locales: ['en', 'pt'],
  // as-needed: Adiciona o prefixo de idioma à URL somente quando não é o idioma padrão
  localePrefix: 'as-needed', 
  // Define se a detecção automática de localidade está habilitada ou não
  localeDetection: false,
  // Used when no locale matches
  defaultLocale: 'en',
  
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt)/:path*']
};
