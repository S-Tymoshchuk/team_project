import * as sgMail from '@sendgrid/mail';

function upChart(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export const mailConfig = (email, password, firstName) => {
  sgMail.setApiKey(process.env.SENDGRID_KEY);

  const msg = {
    to: email,
    from: 'lobalmax@gmail.com',
    subject: 'Восстановление пароля',
    text: 'Восстановление пароля',
    html: `<div>Уважаемый <strong>${upChart(firstName)}<strong>. Вы сделали запрос на получение забытого пароля на сайте ${process.env.HOME_PAGE}. Ваш временный пароль ${password}  </div>
<div>Если вы не делали запроса для получения пароля, то просто удалите данное письмо.Ваш пароль хранится в надежном месте и недоступен посторонним лицам.</div>`,
  };
  return sgMail.send(msg);
};


