var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});

// src/EditorView/index.tsx
var React2 = __toESM(require("react"));
var import_editor4 = __toESM(require("@easylogic/editor"));
var import_editor5 = require("@easylogic/editor/dist/editor.css");

// src/ReactComponentPlugin/index.ts
var import_editor3 = require("@easylogic/editor");

// src/ReactComponentPlugin/constants.ts
var REACT_COMPONENT_TYPE = "react-component";

// src/ReactComponentPlugin/ReactComponentHTMLRender.ts
var import_editor = require("@easylogic/editor");

// src/ReactComponentPlugin/createMyComponent.tsx
var React = __toESM(require("react"));
var ReactDOM = __toESM(require("react-dom"));
function createMyComponent(props = {}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "my-first-react-component"
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: () => alert(props.value)
  }, "Sample Value: ", props.value), /* @__PURE__ */ React.createElement("div", {
    style: { backgroundColor: "blue", border: "5px solid white" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { color: "yellow" }
  }, "Color: ", props["background-color"])));
}
function render2(props, container) {
  return ReactDOM.render(createMyComponent(props), container);
}

// src/ReactComponentPlugin/ReactComponentHTMLRender.ts
var ReactComponentHTMLRender = class extends import_editor.HTMLLayerRender {
  update(item, currentElement) {
    let $reactComponentArea = currentElement.$(".react-component-area");
    if ($reactComponentArea) {
      render2(item.attrs("value", "background-color"), $reactComponentArea.el);
    }
    super.update(item, currentElement);
  }
  render(item) {
    var { id } = item;
    return `
      <div class='element-item ${REACT_COMPONENT_TYPE}' data-id="${id}">
        ${this.toDefString(item)}
        <div class='react-component-area' data-domdiff-pass="true" style="width:100%;height:100%;"></div>
      </div>`;
  }
};

// src/ReactComponentPlugin/ReactComponentLayer.ts
var import_editor2 = require("@easylogic/editor");
var ReactComponentLayer = class extends import_editor2.Component {
  getDefaultObject(obj = {}) {
    const data = super.getDefaultObject(__spreadValues({
      itemType: REACT_COMPONENT_TYPE,
      name: "New React Component",
      value: "test"
    }, obj));
    return data;
  }
  toCloneObject() {
    return __spreadValues(__spreadValues({}, super.toCloneObject()), this.attrs("value"));
  }
  enableHasChildren() {
    return false;
  }
  getDefaultTitle() {
    return "React Component";
  }
};

// src/ReactComponentPlugin/index.ts
function ReactComponentPlugin_default(editor2) {
  editor2.registerComponent(REACT_COMPONENT_TYPE, ReactComponentLayer);
  editor2.registerInspector(REACT_COMPONENT_TYPE, function(item) {
    return [
      {
        key: `value`,
        editor: "TextEditor",
        editorOptions: {
          label: "Value"
        },
        value: item.value,
        refresh: true,
        defaultValue: item == null ? void 0 : item.value
      }
    ];
  });
  editor2.registerRenderer("html", REACT_COMPONENT_TYPE, new ReactComponentHTMLRender());
  class AddReactComponent extends import_editor3.MenuItem {
    getIconString() {
      return "add_box";
    }
    getTitle() {
      return this.props.title || "React Component";
    }
    isHideTitle() {
      return true;
    }
    clickButton() {
      this.emit("addLayerView", REACT_COMPONENT_TYPE);
    }
  }
  editor2.registerMenuItem("sidebar", {
    AddReactComponent
  });
}

// src/EditorView/index.tsx
function EditorView({ plugins = [] }) {
  const editorRef = React2.useRef();
  React2.useEffect(() => {
    const editorInstance = import_editor4.default.createDesignEditor({
      container: editorRef.current,
      plugins: [
        ReactComponentPlugin_default,
        ...plugins
      ]
    });
    return () => {
      editorInstance.destroy();
    };
  }, []);
  return /* @__PURE__ */ React2.createElement("div", {
    ref: editorRef,
    className: `editor-view`
  });
}

// src/index.ts
var src_default = EditorView;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
