let m = angular.module("lens.current_user", []);

m.service("CurrentUser", function() {
  let _user = null;

  let authenticate = function(callback) {
    $.ajax({
      url: 'api/auth/',
      method: 'GET'
    }).done(function(data) {
      _user = data.user;
      callback(_user);
    }).fail(function(data) {
      _user = null;
      callback(null, {error: `${data.status} Error: ${data.responseText}`});
    });
  };

  this.get = function() {
    return new Promise((resolve, reject) => {
      if (_user) {
        resolve(_user);
      } else {
        authenticate((user, error) => {
          if (user) {
            resolve(user);
          } else {
            reject(error);
          }
        });
      }
    });
  };
});

module.exports = m;
