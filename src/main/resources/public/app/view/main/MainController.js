/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaCRM.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'SenchaCRM.model.Customer'
    ],

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAddButtonClick: function () {
        var created = Ext.create('SenchaCRM.model.Customer');
        var store = Ext.getStore('Customers');
        store.insert(0, created);
    },

    onSaveButtonClick: function () {
        var store = Ext.getStore('Customers');
        Ext.Msg.confirm('SenchaCRM', '保存しますか？', function (btn) {
            if (btn === 'yes') {
                store.sync({
                    success: function () {
                        Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                            store.load();
                        });
                    }
                });
            }
        });
    },

    onDeleteButtonClick: function (grid, index) {
        grid.getStore().removeAt(index);
    },

    onSearchTriggerClick: function () {
        Ext.Msg.alert('Hi');
    }

});
