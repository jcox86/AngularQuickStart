"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng2_toastr_1 = require("ng2-toastr");
/**
 * Created by jake.cox on 5/1/2017.
 */
var CustomToastr = (function (_super) {
    __extends(CustomToastr, _super);
    function CustomToastr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight';
        _this.newestOnTop = true;
        _this.showCloseButton = false;
        _this.positionClass = 'toast-bottom-right';
        return _this;
    }
    return CustomToastr;
}(ng2_toastr_1.ToastOptions));
exports.CustomToastr = CustomToastr;
//# sourceMappingURL=custom-toastr.js.map