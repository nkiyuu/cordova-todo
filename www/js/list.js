var jsList = {
  init: function(page) {
    var elemRegBtn = document.getElementById('register-button');
    elemRegBtn.addEventListener(
      'click',
      this.onClickRegisterButton.bind(this),
      false
    );
  },
  onClickRegisterButton: function() {
    var values = {};

    var elemInput = document.getElementById('input-title');
    values.title = elemInput.value;
    console.log(values);
  },
};
