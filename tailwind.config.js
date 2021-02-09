module.exports = {
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    container: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./src/*.js", "./src/**/*.js", "./public/index.html"],
  },
};
