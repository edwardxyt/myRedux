import jQuery from 'jquery';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import fetchJsonp from 'fetch-jsonp';

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Link, IndexLink } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose, bindActionCreators } from 'Redux';
import { Provider, connect } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import { normalize, Schema, arrayOf } from 'normalizr';
import { createSelector } from 'reselect'

//antd
import Button from 'antd/lib/button';
import Breadcrumb from 'antd/lib/breadcrumb';
import Alert from 'antd/lib/alert';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import Tree from 'antd/lib/tree';
import Radio from 'antd/lib/radio';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Popconfirm from 'antd/lib/popconfirm';
import Modal from 'antd/lib/modal';
import Tabs from 'antd/lib/tabs';
import Select from 'antd/lib/select';
import InputNumber from 'antd/lib/input-number';
import Switch from 'antd/lib/switch';
import Slider from 'antd/lib/slider';
import Upload from 'antd/lib/upload';
import Tooltip from 'antd/lib/tooltip';
import Cascader from 'antd/lib/cascader';
import Checkbox from 'antd/lib/checkbox';

import './reset.less';
import 'antd/dist/antd.less';
// import 'antd/lib/style/index.less';
// import 'antd/lib/button/style/index.less';
// import 'antd/lib/breadcrumb/style/index.less';
// import 'antd/lib/alert/style/index.less';
// import 'antd/lib/table/style/index.less';

import './haha.less';

window.jQuery = jQuery;
window.$ = jQuery;
window._ = _;
window.fetch = fetch;
window.fetchJsonp = fetchJsonp;

//react
window.React = React;
window.ReactDOM = ReactDOM;
window.Component = Component;
window.PropTypes = PropTypes;

//react-router
window.Router = Router;
window.Route = Route;
window.IndexRoute = IndexRoute;
window.Redirect = Redirect;
window.Link = Link;
window.IndexLink = IndexLink;
window.hashHistory = hashHistory;
window.browserHistory = browserHistory;

//redux
window.createStore = createStore;
window.combineReducers = combineReducers;
window.applyMiddleware = applyMiddleware;
window.compose = compose;
window.bindActionCreators = bindActionCreators;

//react-redux
window.Provider = Provider;
window.connect = connect;

//Middleware
window.thunkMiddleware = thunkMiddleware;
window.promiseMiddleware = promiseMiddleware;
window.createLogger = createLogger;

//normalizr
// window.normalize = normalize;
// window.Schema = Schema;
// window.arrayOf = arrayOf;

//reselect
window.createSelector = createSelector;

//ant
window.Button = Button;
window.Breadcrumb = Breadcrumb;
window.Alert = Alert;
window.Table = Table;
window.Row = Row;
window.Col = Col;
window.Card = Card;
window.Dropdown = Dropdown;
window.Icon = Icon;
window.Menu = Menu;
window.Tree = Tree;
window.Radio = Radio;
window.Input = Input;
window.Form = Form;
window.Popconfirm = Popconfirm;
window.Modal = Modal;
window.Tabs = Tabs;
window.Select = Select;
window.InputNumber = InputNumber;
window.Switch = Switch;
window.Slider = Slider;
window.Upload = Upload;
window.Tooltip = Tooltip;
window.Cascader = Cascader;
window.Checkbox = Checkbox;
