/**
 * Инициализация коллекции цвета через типизированные CSS-свойства.
 * Пользовательские свойства CSS не могут наследовать значение родительского элемента.
 * Скрипт не использует возможности импорта/экспорта модулей,
 * может быть загружен и выполнен на веб-странице в первую очередь.
 *
 * @module '@bpanchenko/palette/register-css-properties'
 */

window.CSS.registerProperty({
  name: "--clr-black",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.8851rad 8.8365% 89.748% / none)",
});
window.CSS.registerProperty({
  name: "--clr-white",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.0944rad 100% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0394811rad 13.335% 31.062% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.25277rad 32.89% 32.484% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.130783rad 76.514% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.113801rad 54.73% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.091731rad 37.148% 2.9442% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.075215rad 25.502% 16.897% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.041216rad 13.718% 30.638% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.1954rad none 44.178% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.19121rad none 61.402% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.20709rad none 78.312% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.21826rad none 93.271% / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0379993rad 52.463% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.2769rad 43.503% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.97688rad none none / none)",
});
window.CSS.registerProperty({
  name: "--clr-red-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.93028rad none 21.393% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.88717rad 60.871% 5.7094% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.92627rad 88.272% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.90899rad 78.431% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.88839rad 62.783% 3.6194% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.87949rad 50.638% 16.947% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.8671rad 38.877% 29.975% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.8493rad 27.488% 42.688% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.8198rad 16.342% 55.076% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.75365rad 4.364% 67.136% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.73777rad none 79.46% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.95rad none 93.76% / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.85837rad 55.58% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.82678rad 44.306% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.6334rad none none / none)",
});
window.CSS.registerProperty({
  name: "--clr-pink-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.62973rad none 20.517% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.42832rad 17.795% 24.837% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.54439rad 87.726% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.52519rad 77.179% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.47894rad 53.042% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.45538rad 36.237% 6.9276% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.43635rad 22.492% 20.663% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.39621rad 2.3711% 34.165% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.37509rad none 49.279% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.38329rad none 65.788% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.40616rad none 81.024% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.5135rad none 94.532% / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.48121rad 53.762% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.45625rad 40.738% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.36828rad none none / none)",
});
window.CSS.registerProperty({
  name: "--clr-purple-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.37108rad none 22.787% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.85079rad 10.859% 11.012% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.61939rad 46.53% 29.071% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.62398rad 39.23% 35.808% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.73752rad 63.134% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.77644rad 42.255% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.82077rad 21.89% 3.3675% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.90752rad none 17.079% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.90734rad none 37.31% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.89163rad none 57.037% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.84835rad none 75.24% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.66788rad none 91.521% / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.73805rad 63.872% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.73874rad 55.943% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.74642rad 38.568% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-violet-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.84783rad none none / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.46141rad 7.9752% 55.905% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.09764rad 30.13% 12.127% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.10209rad 23.1% 18.632% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.24324rad 69.506% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.26873rad 56.168% 4.3666% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.28845rad 44.071% 17.672% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.31742rad 32.28% 30.672% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.36472rad 20.64% 43.35% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.45879rad 8.2278% 55.688% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.57433rad none 69.586% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.41446rad none 88.912% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.32851rad 60.32% 56.696% / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.26419rad 62.94% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.23574rad 50.209% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-indigo-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.16889rad 27.971% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.1565rad 29.397% 25.247% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.919055rad 38.38% 18.074% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.923419rad 31.22% 24.302% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.05004rad 66.211% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.09123rad 51.926% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.11392rad 40.858% 10.42% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.15074rad 30.509% 23.76% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.22021rad 19.842% 36.811% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.3806rad 4.9643% 49.559% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.46403rad none 67.614% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(4.34273rad none 88.208% / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.86782rad 58.373% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.83658rad 48.362% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.72453rad 19.307% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-blue-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.45907rad none 30.618% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.52225rad 29.416% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.56571rad 82.571% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.5596rad 68.916% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.5315rad 36.889% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.50724rad 19.335% 8.3358% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.43481rad none 21.479% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.44004rad none 38.118% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.45121rad none 53.862% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.47757rad none 68.538% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.55541rad none 81.895% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.82524rad none 94.043% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.24527rad none 16.034% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.21769rad none 26.446% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.13025rad none 56.235% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-blue-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.1313rad none 69.845% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.11838rad 20.79% 19.143% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.10773rad 54.473% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.11245rad 41.579% 2.8876% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.11698rad 25.479% 15.978% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.12588rad none 28.73% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.1292rad none 41.128% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.12938rad none 54.064% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.12938rad none 66.376% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.12955rad none 77.956% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.1299rad none 88.631% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.14002rad none 97.797% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.13671rad none 27.316% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.13723rad none 33.162% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.13845rad none 44.562% / none)",
});
window.CSS.registerProperty({
  name: "--clr-cyan-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.1402rad none 60.882% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.95327rad 13.714% 41.016% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.89794rad 61.852% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.90213rad 55.263% 3.9612% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.91243rad 42.062% 16.977% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.92779rad 28.427% 29.644% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.95659rad 12.194% 41.933% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.00598rad none 53.81% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.00092rad none 65.874% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.98591rad none 77.58% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.94297rad none 88.367% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.95227rad 3.7247% 4.31% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.01279rad none 26.659% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.01174rad none 32.499% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.0086rad none 43.855% / none)",
});
window.CSS.registerProperty({
  name: "--clr-teal-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.9997rad none 59.947% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.58152rad none 14.342% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.23926rad 69.783% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.37976rad 28.025% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.58256rad none 10.361% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.57785rad none 24.861% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.56843rad none 38.84% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.54958rad none 52.231% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.50961rad none 64.945% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.41588rad none 76.881% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.32216rad none 88.051% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.6416rad 4.7493% 5.54% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.65883rad none 24.529% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.66826rad none 30.556% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.68571rad none 42.269% / none)",
});
window.CSS.registerProperty({
  name: "--clr-green-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.63091rad none 58.722% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.08235rad 43.073% 9.2249% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.04727rad 70.129% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.0738rad 51.65% 0.30123% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.08759rad 38.852% 13.559% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.11202rad 24.937% 26.497% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.20487rad 4.4327% 39.095% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.17835rad none 51.595% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.17869rad none 64.6% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.18323rad none 76.83% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.17032rad none 88.058% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(5.61141rad 3.987% 4.23% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.59705rad none 24.056% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.61433rad none 30.141% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.633rad none 41.916% / none)",
});
window.CSS.registerProperty({
  name: "--clr-light-green-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.52985rad none 58.384% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.45927rad 17.663% 19.009% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.51933rad 47.542% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.50091rad 36.737% 3.4407% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.46894rad 21.119% 16.602% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.36558rad none 29.436% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.36181rad none 42.437% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.37312rad none 55.172% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.39422rad none 67.292% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.44014rad none 78.681% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.57956rad none 89.169% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.72805rad none 98.057% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.64494rad none 23.619% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.68777rad none 29.353% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.74952rad none 40.91% / none)",
});
window.CSS.registerProperty({
  name: "--clr-lime-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.5103rad none 59.223% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.988083rad none 8.5678% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.976966rad 23.78% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.98105rad 10.908% 5.4713% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.990893rad none 18.225% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.988886rad none 31.41% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.986565rad none 44.269% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.982935rad none 56.607% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.976704rad none 68.35% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.963893rad none 79.39% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.925635rad none 89.552% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(3.78387rad 4.815% 5.31% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.05631rad none 30.788% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.0624rad none 36.08% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.07556rad none 46.468% / none)",
});
window.CSS.registerProperty({
  name: "--clr-yellow-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.13576rad none 60.895% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.827007rad none 3.2777% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.742079rad 66.429% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.761068rad 35.211% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.839294rad none 7.7332% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.83788rad none 22.309% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.833203rad none 36.565% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.82493rad none 50.253% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.809658rad none 63.299% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.777614rad none 75.595% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.686595rad none 86.975% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.450312rad none 97.053% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.814981rad none 14.806% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.814109rad none 21.194% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.82027rad none 34.164% / none)",
});
window.CSS.registerProperty({
  name: "--clr-amber-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(1.0011rad none 59.219% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.649786rad 11.527% 2.7793% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.568628rad 76.431% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.578193rad 57.351% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.640571rad 15.161% 0.7545% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.711134rad none 14.789% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.706649rad none 30.333% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.697521rad none 45.171% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.678113rad none 59.258% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.633973rad none 72.495% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.508589rad none 84.792% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.251991rad none 95.985% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.628057rad none 0.97311% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.621582rad none 7.9189% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.620011rad none 22.283% / none)",
});
window.CSS.registerProperty({
  name: "--clr-orange-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.729373rad none 47.51% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.444413rad 7.9565% 2.2452% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.353621rad 82.813% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.357286rad 69.416% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.374303rad 38.906% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.4567rad 5.0612% 3.4661% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.503981rad none 19.794% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.492218rad none 36.691% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.465497rad none 52.612% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.397621rad none 67.401% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.218306rad none 81.248% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0480559rad none 94.154% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.249931rad 36.99% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.240175rad 23.559% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.307108rad none 3.2535% / none)",
});
window.CSS.registerProperty({
  name: "--clr-deep-orange-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.37193rad none 30.768% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.244765rad 39.629% 23.31% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.245638rad 85.011% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.24569rad 73.301% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.245201rad 56.746% 4.1289% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.244922rad 44.878% 17.391% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.244573rad 33.433% 30.344% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.244521rad 22.407% 42.972% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.247139rad 11.645% 55.262% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.256668rad 0.50387% 67.206% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0445443rad none 79.016% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.26085rad none 93.438% / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0995326rad 48.611% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(0.0575138rad 39.44% none / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.035rad none none / none)",
});
window.CSS.registerProperty({
  name: "--clr-brown-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(6.01632rad none 21.506% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14361rad 48.973% 50.184% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-50",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14274rad 92.825% 6.2277% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14274rad 86.367% 12.698% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14292rad 73.723% 25.369% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-300",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14326rad 61.472% 37.65% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14344rad 49.654% 49.5% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-500",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14396rad 38.325% 60.867% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-600",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14466rad 27.556% 71.68% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14571rad 17.453% 81.835% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-800",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.14798rad 8.1825% 91.173% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-900",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.15112rad 1.1087% 98.612% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-a100",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.67175rad none 24.627% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-a200",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.6796rad none 30.644% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-a400",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.69566rad none 42.34% / none)",
});
window.CSS.registerProperty({
  name: "--clr-gray-a700",
  syntax: "<color>",
  inherits: false,
  initialValue: "hwb(2.64836rad none 58.786% / none)",
});
