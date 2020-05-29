/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 0.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.meli);
  }
}(this, function(expect, meli) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new meli.Attributes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Attributes', function() {
    it('should create an instance of Attributes', function() {
      // uncomment below and update the code to test Attributes
      //var instane = new meli.Attributes();
      //expect(instance).to.be.a(meli.Attributes);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property valueId (base name: "value_id")', function() {
      // uncomment below and update the code to test the property valueId
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property valueName (base name: "value_name")', function() {
      // uncomment below and update the code to test the property valueName
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property valueStruct (base name: "value_struct")', function() {
      // uncomment below and update the code to test the property valueStruct
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property attributeGroupId (base name: "attribute_group_id")', function() {
      // uncomment below and update the code to test the property attributeGroupId
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

    it('should have the property attributeGroupName (base name: "attribute_group_name")', function() {
      // uncomment below and update the code to test the property attributeGroupName
      //var instane = new meli.Attributes();
      //expect(instance).to.be();
    });

  });

}));
