function concat(a, b){
    return new String(a)+new String(b);
}
var getRemainingInfo = function getRemainingInfo(countDownDate) {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(timeleft % (1000 * 60) / 1000);
    return {    days: days,    hours: hours,    minutes: minutes,    seconds: seconds  };};
var getNumberWithPrependedZeroIfNeeded = function getNumberWithPrependedZeroIfNeeded(number) {
    return number > 9 ? number : "0".concat(number);};
  var updateTime = function updateTime(countDownDate) {
      var _getRemainingInfo = getRemainingInfo(countDownDate);
          days = _getRemainingInfo.days;
          hours = _getRemainingInfo.hours;
          minutes = _getRemainingInfo.minutes;
          seconds = _getRemainingInfo.seconds;
          if (days > 0 || hours > 0 && minutes > 0 && seconds > 0) {    
          document.getElementById('days').textContent = concat(days, " день");
          document.getElementById('time').textContent = 
          concat(getNumberWithPrependedZeroIfNeeded(hours), ":") + 
          concat(getNumberWithPrependedZeroIfNeeded(minutes), ":")+ 
          concat(getNumberWithPrependedZeroIfNeeded(seconds), "");  }

  else
  {
    document.querySelector(".countdown__info").style.display="none";
    document.querySelector("countdown__timer").style.display="none"
  
  }

};
    var countDownDate = new Date(Date.UTC(2021, 8, 30,6, 0, 0)).getTime();
//    setInterval(function () {
//        updateTime(countDownDate);
//    },1000)


const $select = document.querySelector('select');

    // eslint-disable-next-line
    var choices = new Choices($select, {
     placeholder: true,
      placeholderValue: 'Выберите компанию',
      searchEnabled: false,
      searchChoices: false,
      searchEnabled: true,
    searchFloor: 0,
    searchResultLimit: 4,
    searchFields: [],
      shouldSort: false,
      itemSelectText: '',
      callbackOnInit: cb,
    });

var choiceInstance;

    
    function cb(){
     document.querySelector(".choices__input.choices__input--cloned").style.display="none"
    choiceInstance = document.querySelector('.choices');
    choiceInstance.setAttribute('data-is-valid', 'false');

    }


var  $form = document.querySelector('form');
const $formInputs = $form.querySelectorAll('input');
function isFormValid()  {
      return $formInputs[0].getAttribute('data-is-valid') === 'true' && $formInputs[1].getAttribute('data-is-valid') === 'true';
    };
    
    
    
     $formInputs?.forEach(function($input)  {
      $input.addEventListener('keyup', function(e)  {
        var $target = e.target;
        var  value = $target.value;

        $target.setAttribute('data-is-valid', value.length > 0);

        if (isFormValid() === true) {
          $form.querySelector('button[type="submit"]').removeAttribute('disabled');
        } else {
          $form.querySelector('button[type="submit"]').setAttribute('disabled', 'true');
        }
      });
    });
    
choices.passedElement.element.addEventListener(
      'choice',
      function (e) {
        if (e.detail.choice.placeholder === false) {
          choiceInstance.setAttribute('data-is-valid', 'true');
        } else {
          choiceInstance.setAttribute('data-is-valid', 'false');
        }

        if (isFormValid() === true) {
          $form.querySelector('button[type="submit"]').removeAttribute('disabled');
        } else {
          $form.querySelector('button[type="submit"]').setAttribute('disabled', 'true');
        }
      }
    );   