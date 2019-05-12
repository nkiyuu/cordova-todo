var jsSqltest = {
  init: function(page) {
    db = window.sqlitePlugin.openDatabase({
      name: 'todolist.db',
      location: 'default',
    });

    console.log(db);
  },
};
