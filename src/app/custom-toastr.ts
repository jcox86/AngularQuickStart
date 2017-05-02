import {ToastOptions} from "ng2-toastr";
/**
 * Created by jake.cox on 5/1/2017.
 */
export class CustomToastr extends ToastOptions {
  animate = 'flyRight';
  newestOnTop = true;
  showCloseButton = false;
  positionClass = 'toast-bottom-right';
}
