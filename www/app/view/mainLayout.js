/*
 * File: app/view/mainLayout.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.mainLayout', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        style: 'background: transparent url(\'./images/bg.jpg\') no-repeat;background-size:100%;',
        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {


                            var menu1;

                            menu1=Ext.create('MyApp.view.MyMenu');

                            //Ext.Viewport.add(menu1);

                            Ext.Viewport.toggleMenu(menu1);

                            //Ext.Viewport.add(Ext.create('ComponentOverview.view.MyActionSheet321'));

                            //menu1.show();



                            Ext.Viewport.setMenu(menu1, {
                                cls:'left_menu',
                                side: 'left',
                                cover:false   //菜单弹出：覆盖效果
                                //reveal: true  菜单弹出：主界面可控效果
                            });

                            Ext.Viewport.showMenu('left');


                        },
                        height: '20%',
                        style: 'color:#ffffff;background-color: #043443; opacity:0.9;',
                        ui: 'plain',
                        width: '',
                        iconCls: 'home',
                        text: '菜单Menu'
                    },
                    {
                        xtype: 'button',
                        height: '50%',
                        style: 'color:#ffffff;background-color:#042342; opacity:0.75;',
                        ui: 'plain',
                        text: '注册•登录'
                    },
                    {
                        xtype: 'button',
                        height: '30%',
                        style: 'color:#ffffff;background-color:#045242; opacity:0.75;',
                        ui: 'plain',
                        text: '17:58'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    alert('制作中...');
                                },
                                height: '100%',
                                style: 'color:#ffffff;background-color:#043442; opacity:0.45;',
                                ui: 'plain',
                                iconAlign: 'right',
                                iconCls: 'arrow_right',
                                text: '状况确认'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    Ext.Viewport.removeAll();
                                    Ext.Viewport.add(Ext.create('MyApp.view.MyNavigationView1'));
                                },
                                height: '100%',
                                style: 'color:#ffffff;background-color:#043442; opacity:0.75;',
                                ui: 'plain',
                                iconAlign: 'right',
                                iconCls: 'arrow_right',
                                text: '项目信息'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                height: '100%',
                                style: 'color:#ffffff;background-color:#043442; opacity:0.45;',
                                ui: 'plain',
                                iconAlign: 'right',
                                iconCls: 'arrow_right',
                                text: '最新消息'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                height: '100%',
                                style: 'color:#ffffff;background-color:#043442; opacity:0.75;',
                                ui: 'plain',
                                iconCls: 'user',
                                text: '联系我们'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});