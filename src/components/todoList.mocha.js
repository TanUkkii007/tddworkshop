'use strict';

var assert = require('power-assert');
var todoList = require('./todoList');
var todoItem = require('./todoItem');
var createElement = require('../vdom/createElement');

describe('todoList', function() {

    it('todoListはtodoItemのリストである', function() {
        var ul = createElement('ul');
        var list = [
            {id: 'test0', title: 'todoItem(item)', isPassed: true, tags: ['todoItem']},
            {id: 'test1', title: 'todoItem(item)', isPassed: false, tags: ['todoItem']}
        ];
        var tree = todoList(list);
        assert.deepEqual(tree, ul({clas: 'todo-list'}, [
            todoItem(list[0]),
            todoItem(list[1])
        ]));
    });
});