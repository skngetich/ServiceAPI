const assert = require('assert');
const peopleSchema = require('../db/schema').peopleModel;
const bluePeopleSchema = require('../db/schema').bluePeopleModel;
const mongoose = require('mongoose');
const people = require('../axios.js')