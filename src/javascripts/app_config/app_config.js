let m = angular.module("lens.app_config", []);

m.service("AppConfig", function() {
  let _config = null;

  let getConfig = function(callback) {
    $.ajax({
      url: 'api/config/',
      method: 'GET'
    }).done(function(data) {
      _config = data
      callback(_config);
    }).fail(function(data) {
      _config = null;
      callback(null, {error: `${data.status} Error: ${data.responseText}`});
    });
  };

  this.get = function() {
    return new Promise((resolve, reject) => {
      if (_config) {
        resolve(_config);
      } else {
        getConfig((config, error) => {
          if (config) {
            resolve(config);
          } else {
            reject(error);
          }
        });
      }
    });
  };
});

module.exports = m;
