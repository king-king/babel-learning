function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

var _x = _classPrivateFieldLooseKey("x");

var _m = _classPrivateFieldLooseKey("m");

var _self = _classPrivateFieldLooseKey("self");

class Foo {
  static getSelf() {
    return this;
  }

  static test() {
    var _deep$very$o, _deep$very$o2, _deep$very$o3, _classPrivateFieldLoo, _classPrivateFieldLoo2, _ref, _ref2, _self2, _classPrivateFieldLoo3, _classPrivateFieldLoo4, _ref3, _ref4, _getSelf, _ref5, _ref6, _classPrivateFieldLoo5, _call, _getSelf2, _getSelf3, _fnDeep$very$o, _fnDeep$very$o2, _fnDeep$very$o3, _classPrivateFieldLoo6, _classPrivateFieldLoo7, _ref7, _ref8, _self3, _classPrivateFieldLoo8, _classPrivateFieldLoo9, _ref9, _ref10, _getSelf4, _ref11, _ref12, _classPrivateFieldLoo10, _call2, _getSelf5, _getSelf6;

    const o = {
      Foo: Foo
    };
    const deep = {
      very: {
        o
      }
    };

    function fn() {
      return o;
    }

    function fnDeep() {
      return deep;
    }

    _classPrivateFieldLooseBase(Foo, _m)[_m]?.();
    _classPrivateFieldLooseBase(Foo, _m)[_m]?.().toString;
    _classPrivateFieldLooseBase(Foo, _m)[_m]?.().toString();
    o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _m)[_m]?.();
    o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _m)[_m]?.().toString;
    o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _m)[_m]?.().toString();
    (_deep$very$o = deep?.very.o) === null || _deep$very$o === void 0 ? void 0 : _classPrivateFieldLooseBase(_deep$very$o.Foo, _m)[_m]?.();
    (_deep$very$o2 = deep?.very.o) === null || _deep$very$o2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_deep$very$o2.Foo, _m)[_m]?.().toString;
    (_deep$very$o3 = deep?.very.o) === null || _deep$very$o3 === void 0 ? void 0 : _classPrivateFieldLooseBase(_deep$very$o3.Foo, _m)[_m]?.().toString();
    (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo = _classPrivateFieldLooseBase(o.Foo, _self)[_self], _m)[_m])?.call(_classPrivateFieldLoo);
    (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo2 = _classPrivateFieldLooseBase(o.Foo, _self)[_self].self, _m)[_m])?.call(_classPrivateFieldLoo2);
    (_ref = o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self]) === null || _ref === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref.self, _m)[_m]?.();
    (_ref2 = o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self].self) === null || _ref2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref2.self, _m)[_m]?.();
    (_self2 = (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self])?.self) === null || _self2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_self2.self, _m)[_m]?.();
    (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo3 = _classPrivateFieldLooseBase(o.Foo, _self)[_self].getSelf(), _m)[_m])?.call(_classPrivateFieldLoo3);
    (_ref3 = o === null || o === void 0 ? void 0 : (_classPrivateFieldLoo4 = _classPrivateFieldLooseBase(o.Foo, _self)[_self]).getSelf) === null || _ref3 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref3.call(_classPrivateFieldLoo4), _m)[_m]?.();
    (_ref4 = o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self]) === null || _ref4 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref4.getSelf(), _m)[_m]?.();
    (_getSelf = (_ref5 = o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self])?.getSelf) === null || _getSelf === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf.call(_ref5), _m)[_m]?.();
    (_ref6 = o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self].getSelf()) === null || _ref6 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref6.self, _m)[_m]?.();
    (_call = (o === null || o === void 0 ? void 0 : (_classPrivateFieldLoo5 = _classPrivateFieldLooseBase(o.Foo, _self)[_self]).getSelf)?.call(_classPrivateFieldLoo5)) === null || _call === void 0 ? void 0 : _classPrivateFieldLooseBase(_call.self, _m)[_m]?.();
    (_getSelf2 = (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self])?.getSelf()) === null || _getSelf2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf2.self, _m)[_m]?.();
    (_getSelf3 = (o === null || o === void 0 ? void 0 : _classPrivateFieldLooseBase(o.Foo, _self)[_self])?.getSelf?.()) === null || _getSelf3 === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf3.self, _m)[_m]?.();
    fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _m)[_m]?.();
    fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _m)[_m]?.().toString;
    fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _m)[_m]?.().toString();
    (_fnDeep$very$o = fnDeep?.().very.o) === null || _fnDeep$very$o === void 0 ? void 0 : _classPrivateFieldLooseBase(_fnDeep$very$o.Foo, _m)[_m]?.();
    (_fnDeep$very$o2 = fnDeep?.().very.o) === null || _fnDeep$very$o2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_fnDeep$very$o2.Foo, _m)[_m]?.().toString;
    (_fnDeep$very$o3 = fnDeep?.().very.o) === null || _fnDeep$very$o3 === void 0 ? void 0 : _classPrivateFieldLooseBase(_fnDeep$very$o3.Foo, _m)[_m]?.().toString();
    (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo6 = _classPrivateFieldLooseBase(fn().Foo, _self)[_self], _m)[_m])?.call(_classPrivateFieldLoo6);
    (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo7 = _classPrivateFieldLooseBase(fn().Foo, _self)[_self].self, _m)[_m])?.call(_classPrivateFieldLoo7);
    (_ref7 = fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self]) === null || _ref7 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref7.self, _m)[_m]?.();
    (_ref8 = fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self].self) === null || _ref8 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref8.self, _m)[_m]?.();
    (_self3 = (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self])?.self) === null || _self3 === void 0 ? void 0 : _classPrivateFieldLooseBase(_self3.self, _m)[_m]?.();
    (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(_classPrivateFieldLoo8 = _classPrivateFieldLooseBase(fn().Foo, _self)[_self].getSelf(), _m)[_m])?.call(_classPrivateFieldLoo8);
    (_ref9 = fn === null || fn === void 0 ? void 0 : (_classPrivateFieldLoo9 = _classPrivateFieldLooseBase(fn().Foo, _self)[_self]).getSelf) === null || _ref9 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref9.call(_classPrivateFieldLoo9), _m)[_m]?.();
    (_ref10 = fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self]) === null || _ref10 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref10.getSelf(), _m)[_m]?.();
    (_getSelf4 = (_ref11 = fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self])?.getSelf) === null || _getSelf4 === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf4.call(_ref11), _m)[_m]?.();
    (_ref12 = fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self].getSelf()) === null || _ref12 === void 0 ? void 0 : _classPrivateFieldLooseBase(_ref12.self, _m)[_m]?.();
    (_call2 = (fn === null || fn === void 0 ? void 0 : (_classPrivateFieldLoo10 = _classPrivateFieldLooseBase(fn().Foo, _self)[_self]).getSelf)?.call(_classPrivateFieldLoo10)) === null || _call2 === void 0 ? void 0 : _classPrivateFieldLooseBase(_call2.self, _m)[_m]?.();
    (_getSelf5 = (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self])?.getSelf()) === null || _getSelf5 === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf5.self, _m)[_m]?.();
    (_getSelf6 = (fn === null || fn === void 0 ? void 0 : _classPrivateFieldLooseBase(fn().Foo, _self)[_self])?.getSelf?.()) === null || _getSelf6 === void 0 ? void 0 : _classPrivateFieldLooseBase(_getSelf6.self, _m)[_m]?.();
  }

}

Object.defineProperty(Foo, _x, {
  writable: true,
  value: 1
});
Object.defineProperty(Foo, _m, {
  writable: true,
  value: function () {
    return _classPrivateFieldLooseBase(this, _x)[_x];
  }
});
Object.defineProperty(Foo, _self, {
  writable: true,
  value: Foo
});
Foo.self = Foo;
Foo.test();
