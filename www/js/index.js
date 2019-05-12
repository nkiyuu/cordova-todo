var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );
    document.addEventListener('init', function(event) {
      var page = event.target;

      if (page.id === 'button.html') {
        var elemBtn = document.getElementById('button');
        elemBtn.addEventListener('click', function() {
          ons.notification.alert('ボタンを押しました！');
        });
      } else if (page.id === 'sqltest.html') {
        jsSqltest.init(page);
      }
    });
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
};

app.initialize();
