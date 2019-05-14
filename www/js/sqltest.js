var jsSqltest = {
  init: function(page) {
    var db = window.sqlitePlugin.openDatabase({
      name: 'todolist.db',
      location: 'default',
    });

    console.log(db);

    var sql = {
      createTable:
        '' +
        'CREATE TABLE IF NOT EXISTS test (' +
        //   カラム名    データ型
        '  id         INTEGER PRIMARY KEY,' +
        '  text       TEXT' +
        ')',
      insert: 'INSERT INTO test (text) VALUES (?)',
    };

    db.transaction(
      function(tx) {
        tx.executeSql(sql.createTable);
        tx.executeSql('SELECT * FROM test', [], function(tx, result) {
          console.log(result);
          for (var i = 0; i < result.rows.length; i++) {
            console.log(result.rows.item(i))
          }
        });
        console.log('plus')
      },
      function(error) {
        console.log('Error: ' + error.message);
      },
      function() {
        console.log('create table');
      }
    );
  },
};
