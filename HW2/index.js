var cartoon = 'Мультфильмы';
var comedy = 'Комедия';
var action = 'Боевики';
var drama = 'Мелодрама';

if (confirm('Любите ли вы просмотр кино?')) {
  var userGenre = prompt('Какой жанр вы предпочитаете?');
  if (userGenre === cartoon || userGenre === comedy || userGenre === action || userGenre === drama) {
    var age = prompt('Сколько вам лет?');
    var ageChecked = Number(age);
    if (ageChecked) {
      if (ageChecked <= 10) {
        if (confirm(`Предлагаем вам посмотреть что-нибудь в жанре "${cartoon}"`)) {
          alert ('Красава!');
        } else {
          alert ('Ну и сиди деградируй дальше в своем тик-токе...');
        }
      } else if (ageChecked >= 11 && ageChecked <= 20) {
        if (confirm(`Предлагаем вам посмотреть что-нибудь в жанре "${comedy}"`)) {
          alert ('Красава!');
        } else {
          alert ('Ну и сиди деградируй дальше в своем тик-токе...');
        }
      } else if (ageChecked >= 21 && ageChecked <= 30) {
        if (confirm(`Предлагаем вам посмотреть что-нибудь в жанре "${action}"`)) {
          alert ('Красава!');
        } else {
          alert ('Ну и сиди деградируй дальше в своем тик-токе...');
        }
      } else if (ageChecked >= 31) {
        if (confirm(`Предлагаем вам посмотреть что-нибудь в жанре "${drama}"`)) {
          alert ('Красава!');
        } else {
          alert ('Ну и сиди деградируй дальше в своем тик-токе...');
        }
      }
    } else {
      alert('Вы ввели некорректный возраст...');
    }
  } else {
    alert ('Ну, на этом наши полномочия всё, окончены...');
  }
} else {
  var reason = prompt('Чёй вы удумали? Почему так?');
  age = prompt('Сколько вам лет?');
  ageChecked = Number(age);
  if (ageChecked) {
    if (ageChecked <= 10) {
      if (confirm(`Ваша причина "${reason}" учтена, но всё же предлагаем вам посмотреть что-нибудь в жанре "${cartoon}"`)) {
        alert ('Красава!');
      } else {
        alert ('Ну и сиди деградируй дальше в своем тик-токе...');
      }
    } else if (ageChecked >= 11 && ageChecked <= 20) {
      if (confirm(`Ваша причина "${reason}" учтена, но всё же предлагаем вам посмотреть что-нибудь в жанре "${comedy}"`)) {
        alert ('Красава!');
      } else {
        alert ('Ну и сиди деградируй дальше в своем тик-токе...');
      }
    } else if (ageChecked >= 21 && ageChecked <= 30) {
      if (confirm(`Ваша причина "${reason}" учтена, но всё же предлагаем вам посмотреть что-нибудь в жанре "${action}"`)) {
        alert ('Красава!');
      } else {
        alert ('Ну и сиди деградируй дальше в своем тик-токе...');
      }
    } else if (ageChecked >= 31) {
      if (confirm(`Ваша причина "${reason}" учтена, но всё же предлагаем вам посмотреть что-нибудь в жанре "${drama}"`)) {
        alert ('Красава!');
      } else {
        alert ('Ну и сиди деградируй дальше в своем тик-токе...');
      }
    }
  } else {
    alert('Вы ввели некорректный возраст...');
  }
}
