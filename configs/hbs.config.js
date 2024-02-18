const hbs = require('hbs')
const dayjs = require('dayjs');

hbs.registerPartials(`${__dirname}/../views/partials`)

hbs.registerHelper('formatDate', (date, format, options) => {
  //dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
  const formatDate = dayjs(date).format('YYYY-MM-DD');
  return formatDate;
})